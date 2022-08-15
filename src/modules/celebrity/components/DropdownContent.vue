<template>
  <div
    class="dropdown-content"
    v-for="item in items"
    :key="item.name"
    v-show="active"
    @click="optionSelected(item)"
  >
    <template class="dropdown-item">{{ item.name }}</template>
  </div>
</template>

<script>
export default {
  name: "AppDropdownContent",
  inject: ["sharedState"],
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    optionSelected: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    active() {
      return this.sharedState.active;
    },
  },
};
</script>
<style scope>
.dropdown-content {
  position: relative;
}
.dropdown-content > .dropdown-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 146px;
  border: 2px solid;
  background: white;
  cursor: pointer;
}
</style>
