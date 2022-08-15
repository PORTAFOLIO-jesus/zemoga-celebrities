<script>
import Dropdown from "../components/Dropdown.vue";
import DropdownContent from "../components/DropdownContent.vue";
import { defineAsyncComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Dropdown,
    DropdownContent,
    Celebrity: defineAsyncComponent(() =>
      import("../components/Celebrity.vue")
    ),
  },
  data() {
    return {
      typeDropDown: "",
      toggleTitleDropDown: "List",
      items: [
        {
          type: "list",
          name: "List",
        },
        {
          type: "grid",
          name: "Grid",
        },
      ],
    };
  },
  methods: {
    ...mapActions("celebrity", ["loadCelebrities"]),
    gridClickView() {
      this.typeDropDown = "grid";
      this.toggleTitleDropDown = "Grid";
    },
    listClickView() {
      this.typeDropDown = "list";
      this.toggleTitleDropDown = "List";
    },
    optionSelected(item){
      this.typeDropDown = item.type;
      this.toggleTitleDropDown = item.name;
    }
  },
  computed: {
    ...mapGetters("celebrity", ["getAllCelebrities"]),
    listAllCelebrities() {
      return this.getAllCelebrities();
    },
    setTypeDragDown() {
      return this.typeDropDown;
    },
    setTitleToggleTitle() {
      return this.toggleTitleDropDown;
    },
  },
  created() {
    this.loadCelebrities();
  },
};
</script>

<template>
  <div class="subtitle__celebrity">
    <div class="subtitle__celebrity__section">Previous Rullings</div>

    <Dropdown class="dropdown__select">
      <template v-slot:toggler>
        <button>{{ setTitleToggleTitle }}</button>
      </template>
      <div class="dropdown__content">
        <DropdownContent :items="items" :optionSelected="optionSelected"/>
      </div>

      <!--<div @click="listClickView">List</div>
        </DropdownContent>
        <DropdownContent class="dropdown__content">
          <div @click="gridClickView">Grid</div>
        </DropdownContent>
        -->
    </Dropdown>
  </div>

  <div class="celebrity-cards__grid">
    <celebrity
      v-for="(itemCelebrity, index) in listAllCelebrities"
      :key="index"
      :celebrity="itemCelebrity"
      :id="index"
      :type="setTypeDragDown"
    >
    </celebrity>
  </div>
</template>
<style scope>
.celebrity-cards__grid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.celebrity-cards__list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media screen and (max-width: 719px) {
  .celebrity-cards__grid {
    flex-wrap: nowrap;
    overflow-x: auto;
  }
}
</style>
