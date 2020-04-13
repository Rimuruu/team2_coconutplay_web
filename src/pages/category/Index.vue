<template>
  <div class="category">
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
  name: "CategoryIndex",
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
  async beforeRouteUpdate(to, fron, next) {
    await await this.getGamesByCategory(to.params.category);
    next();
  },
  async mounted() {
    await this.getGamesByCategory(this.$route.params.category);
    await this.$store.dispatch("category/getAllCategories");
  },
  methods: {
    async getGamesByCategory(category) {
      await this.$store.dispatch("gameTest/getAllGamesByCategory", { category });
    },
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
