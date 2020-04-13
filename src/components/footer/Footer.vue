<template>
  <div class="footer">
    <div class="container">
      <div class="category" v-for="(category, index) in categories" v-bind:key="index">
        <FooterCategory :name="category.name" :links="category.links" />
      </div>
    </div>
  </div>
</template>

<script>
import FooterModel from "@/models/footer";

import FooterCategory from "@/components/footer/FooterCategory.vue";

export default {
  name: "Footer",
  components: {
    FooterCategory,
  },
  computed: {
    games() {
      return this.$store.state.gameTest.games;
    },
    categories() {
      return [
        {
          name: "Catégorie",
          links: this.$store.state.category.categories.map((x) => {
            return {
              name: x,
              ref: x,
              isUseRouter: true,
            };
          }),
        },
        ...FooterModel.categories,
      ];
    },
  },
  async mounted() {
    await this.$store.dispatch("gameTest/getAllGames");
    await this.$store.dispatch("category/getAllCategories");
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 300px;
  background-color: #2c2c2c;

  color: beige;
}

.footer .container {
  display: flex;
  align-items: flex-start;
  justify-content: center;

  max-width: 1920px;
  width: 100%;
}

.footer .container .category {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(33.333% - 80px);
}

@media all and (max-width: 900px) {
  .footer .container .category {
    width: calc(33.333% - 40px);
  }
}
</style>
