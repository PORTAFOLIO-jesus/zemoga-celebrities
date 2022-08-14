<template>
  <div @click="toggle">
    <slot name="toggler">
      <button class="dropdown__select">List</button>
    </slot>
    <slot>{{ title }}</slot>
  </div>
</template>

<script>
export default {
  prop: {
    title: "",
  },
  name: "AppDropdown",
  provide() {
    return {
      sharedState: this.sharedState,
    };
  },
  data() {
    return {
      sharedState: {
        active: false,
      },
    };
  },
  methods: {
    toggle() {
      this.sharedState.active = !this.sharedState.active;
    },
  },
};
</script>
