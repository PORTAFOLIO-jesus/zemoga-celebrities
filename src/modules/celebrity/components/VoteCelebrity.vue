<script>
export default {
  name: "VoteCelebrity",
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
  },
  data() {
    return {
      isVotting: true,
    };
  },
  computed: {
    nameButtonVote() {
      return this.isVotting ? "Vote Now" : "Vote Again";
    },
  },
};
</script>

<template>
  <div>
    <div>
      <button>👍🏽</button>
      <button>👎🏽</button>
      <button>{{ nameButtonVote }}</button>
    </div>
  </div>
</template>

<style></style>
