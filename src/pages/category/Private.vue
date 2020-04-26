<template>
  <div class="category">
    <div class="item content">
      <ContentGrid :games="games.filter(isPrivate)" />
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
  name: "PrivatePage",
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
  methods : {
      isPrivate(game){
          return game.visibility == "private";

      }
  },
};
</script>

<style scoped>
.category {
  background-color: #3b3f48;
  width: 100%;
  min-height: 100%;
  display: flex;
}

.category .item {
  flex-grow: 1;
}

.category .item.content {
  flex-grow: 4;
}
</style>
