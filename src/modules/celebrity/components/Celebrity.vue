<template>
  <div :class="card">
    <div :class="cardImg">
      <img
        :src="setSrcImage"
        alt="celebrity.picture"
        class="card__img-degradee"
      />
    </div>
    <div :class="cardContent">
      <div class="card__name">{{ celebrity.name }}</div>
      <div class="card__description">{{ celebrity.description }}</div>
    </div>
    <div class="card__occupation">
      <template v-if="votesButtons">
        {{ timeOccupationCelebritty }}
      </template>
      <template v-else> Thank you for your vote! </template>
    </div>

    <!-- actions button -->
    <div class="card__buttons">
      <div class="card__buttons-align">
        <template v-if="votesButtons">
          <button
            @click="goodVoteCelebrity"
            class="icon-button card__butoon-selected"
            aria-label="thumbs up"
          >
            <img src="assets/img/thumbs-up.svg" alt="thumbs up" />
          </button>
          <button
            @click="badVoteCelebrity"
            class="icon-button card__butoon-selected"
            aria-label="thumbs down"
          >
            <img src="assets/img/thumbs-down.svg" alt="thumbs down" />
          </button>
        </template>
        <button
          class="card__button__vote-selected"
          :disabled="buttonVote"
          @click="updateCelebrityVote"
        >
          {{ nameButtonVote }}
        </button>
      </div>
    </div>
    <!-- porcentajes -->
    <div class="card__percentages">
      <votes-percentages :percentages="percentVotesTotal"></votes-percentages>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions } from "vuex";

import { percentGoodBadVotes } from "../../../helpers/numbers.js";
import { litelTimeNumberDays } from "../../../helpers/dates.js";
export default {
  name: "Celebrity",
  components: {
    VoteCelebrity: defineAsyncComponent(() => import("./VoteCelebrity.vue")),
    VotesPercentages: defineAsyncComponent(() =>
      import("./VotesPercentages.vue")
    ),
  },
  data() {
    return {
      isVotting: true,
      percentsVotes: { badPercentRounded: 0, goodPercentRounded: 0 },
      buttonVote: true,
      votesButtons: true,
      votesPeople: {
        positive: 0,
        negative: 0,
      },
    };
  },
  props: {
    celebrity: {
      name: "",
      description: "",
      category: "",
      picture: "",
      lastUpdated: "",
      votes: {
        positive: 0,
        negative: 0,
      },
    },
    id: 0,
    type: {
      type: String,
      default: "list",
    },
  },
  computed: {
    setSrcImage() {
      return `assets/img/celebrity/${this.celebrity.picture}`;
    },
    timeOccupationCelebritty() {
      const relativeTime = litelTimeNumberDays(this.celebrity.lastUpdated);

      const category = this.celebrity.category.toString();

      const literalTimeOccupation =
        relativeTime +
        " in " +
        category.charAt(0).toUpperCase() +
        category.slice(1);

      return literalTimeOccupation;
    },
    nameButtonVote() {
      let labelButton = "";
      if (this.isVotting) {
        labelButton = "Vote Now";
        this.votesButtons = true;
        this.isVotting = true;
      } else {
        labelButton = "Vote Again";
        this.votesButtons = false;
        this.isVotting = false;
      }

      return labelButton;
    },
    changeVisivilityButton() {
      this.votesButtons = !this.votesButtons;
    },

    percentVotesTotal() {
      const { positive, negative } = this.celebrity.votes;

      const { badPercentRounded, goodPercentRounded } = percentGoodBadVotes(
        positive,
        negative
      );
      this.percentsVotes.badPercentRounded = badPercentRounded;
      this.percentsVotes.goodPercentRounded = goodPercentRounded;

      return this.percentsVotes;
    },
    card() {
      return this.type === "grid" ? "card-grid" : "card-list";
    },
    cardContent() {
      return this.type === "grid" ? "card-grid__content" : "card-list__content";
    },
    cardImg() {
      return this.type === "grid" ? "" : "card-list__img";
    },
  },
  methods: {
    ...mapActions("celebrity", ["updateCelebrity"]),
    changeButtonVoteAction() {
      this.buttonVote = !this.buttonVote;
    },
    updateCelebrityVote() {
      if (this.isVotting) {
        const id = this.id;
        const celebrity = this.celebrity;
        const votes = this.votesPeople;
        this.updateCelebrity({ celebrity, id, votes });
        this.isVotting = false;
      } else {
        this.votesButtons = true;
        this.isVotting = true;
        this.changeButtonVoteAction();
      }
    },
    goodVoteCelebrity() {
      this.changeButtonVoteAction();
      this.votesPeople.positive = this.celebrity.votes.positive + 1;
      this.votesPeople.negative = this.celebrity.votes.negative;
    },
    badVoteCelebrity() {
      this.changeButtonVoteAction();
      this.votesPeople.negative = this.celebrity.votes.negative + 1;
      this.votesPeople.positive = this.celebrity.votes.positive;
    },
  },
};
</script>

<style scope>
.card-grid {
  display: flex;
  position: relative;
  color: #fff;
  padding-bottom: 15px;
  width: 348px;
  height: 348px;
}

.card-grid__content {
  width: 300px;
  position: absolute;
}

.card-list {
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
}
.card-list::after {
  content: "";
  background: linear-gradient(
    to left,
    #b1b3b5c4,
    #919395fe,
    #919395fe,
    #919395fe,
    #919395fe,
    #484d5054
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  z-index: 2;
}
.card-list__content {
  z-index: 3;
  color: white;
}
.card-list__img img {
  width: 200px;
}

.card__butoon-selected {
  padding: 3px;
  margin-right: 4px;
}
.card__butoon-selected:focus {
  border: 1px solid #fff;
}
.card__button-selected {
  color: #fff;
}
.card__buttons-align {
  display: flex;
  justify-content: center;
}
/* grid */
/* description */
.card-grid .card__name {
  position: relative;
  font-size: 37px;
  line-height: 43.2px;
  left: 2rem;
  top: 6.5rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.card-grid .card__description {
  position: relative;
  top: 6.8rem;
  left: 40px;
  font-size: 15px;
  line-height: 18px;
  /* letter-spacing: 1px; */

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.card-grid .card__occupation {
  position: absolute;
  bottom: 5.5rem;
  right: 25px;
}
.card-grid .card__button__vote-selected {
  width: 115px;
  height: 38px;
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
}
.card-grid .card__butoon-selected {
  height: 35px;
  padding: 5px;
  margin-right: 15px;
}

/* list */
/* description */
.card-list .card__name {
  position: relative;
  font-size: 28px;
  left: 2.3rem;
  top: 0.5rem;
}
.card-list .card__description {
  position: relative;
  top: 1rem;
  left: 2.3rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.card-list .card__occupation {
  position: absolute;
  bottom: 80px;
  right: 25px;
}

/* actions buttons */
.card__buttons {
  position: absolute;
  bottom: 50px;
  right: 25px;
}

/* percets */
.card-list .card__percentages {
  position: absolute;
  bottom: 5px;
  color: #fff;
  height: 36px;
  width: 100%;
}
.card-grid .card__percentages {
  position: absolute;
  bottom: -1px;
  color: #fff;
  height: 36px;
  width: 101%;
}

@media screen and (max-width: 760px) {
  /* grid */
  /* description */
  .card-grid .card__name {
    font-size: 30px;
    line-height: 36px;
    left: 40px;
    top: 10.5rem;
  }
  .card-grid .card__description {
    top: 11rem;
    left: 40px;
    font-size: 15px;
    line-height: 18px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .card-grid .card__occupation {
    bottom: 80px;
    right: 25px;
  }
}
</style>
