<template>
  <div class="category">
    <div
      class="item"
      v-for="category in categories"
      v-bind:key="category"
      @click="goToCategory(category)"
    >
      {{ category.toUpperCase() }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PanelCategory",
  props: {
    categories: Array,
  },
  methods: {
    goToCategory(category) {
      this.$router.push({ name: "category", params: { category } });
    },
  },
};
</script>

<style scoped>
.category {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  color: antiquewhite;
  display: flex;
  flex-direction: column;
}

.category .item {
  padding-top: 10px;
}

.item:hover {
  cursor: pointer;
  color: rgb(191, 21, 77);
}
</style>
