<template>
  <div class="home">
    <div class="item content">
      <ContentGrid :games="games" />
    </div>
    <div class="item">
      <PanelCategory :categories="categories" />
    </div>
  </div>
</template>

<script>
import ContentGrid from "@/components/commons/content/grid/Grid.vue";
import PanelCategory from "@/components/commons/panel/Category.vue";

export default {
  name: "HomeIndex",
  components: {
    ContentGrid,
    PanelCategory,
  },
  computed: {
    games() {
      return this.$store.state.gameTest.games;
    },
    categories() {
      return this.$store.state.category.categories;
    },
  },
  async mounted() {
    await this.$store.dispatch("gameTest/getAllGames");
    await this.$store.dispatch("category/getAllCategories");
  },
};
</script>

<style scoped>
.home {
  background-color: #3b3f48;
  width: 100%;
  min-height: 100%;
  display: flex;
}

.home .item {
  flex-grow: 1;
}

.home .item.content {
  flex-grow: 4;
}
</style>
