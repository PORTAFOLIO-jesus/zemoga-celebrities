<script>
export default {
  name: "VotesPercentages",
  props: {
    percentages: {
      goodPercentRounded: 0,
      badPercentRounded: 0,
    },
  },
  data() {
    return {
      styleVotes: {
        gridTemplateColumns: "50% 50%",
      },
    };
  },
  methods: {
    setVotes() {
      this.styleVotes.gridTemplateColumns = `${this.percentages.goodPercentRounded}% ${this.percentages.badPercentRounded}%`;
    },
  },
  computed: {
    getGoodVotes() {
      return this.percentages.goodPercentRounded + "%";
    },
    getBadVotes() {
      return this.percentages.badPercentRounded + "%";
    },
    getVotesComputedUpdated() {
      this.styleVotes.gridTemplateColumns = `${this.percentages.goodPercentRounded}% ${this.percentages.badPercentRounded}%`;
      return this.styleVotes;
    },
  },
  created() {
    this.setVotes();
  },
};
</script>
<template>
  <div class="grid-votes" :style="getVotesComputedUpdated">
    <div class="grid-votes__positive">
      <img src="assets/img/thumbs-up.svg" alt="thumbs up" />
      {{ getGoodVotes }}
    </div>
    <div class="grid-votes__negative">
      {{ getBadVotes }}
      <img src="assets/img/thumbs-down.svg" alt="thumbs down" />
    </div>
  </div>
</template>

<style>
.grid-votes {
  display: grid;
}
.grid-votes__positive {
  background-color: #3cbbb499;
  padding-left: 10px;
}
.grid-votes__negative {
  background-color: #f9ad1d99;
  display: flex;
  justify-content: end;
  padding-right: 10px;
}
.grid-votes__negative img {
  padding-left: 8px;
  margin: 5px;
}
.grid-votes__positive img {
  padding-right: 8px;
  margin: 5px;
}
</style>
