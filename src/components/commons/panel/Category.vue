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
    <div
v-if="isLog"
class="item"
@click="goToPrivate()"
>
PRIVATE
</div>
  </div>
</template>

<script>
export default {
  name: "PanelCategory",
  props: {
    categories: Array,
  },
  computed:{
    isLog(){
      if(this.$store.state.account.user.token != "")return true;
      return false;
    },
  },
  methods: {
    goToCategory(category) {
      this.$router.push({ name: "category", params: { category } });
    },
    goToPrivate() {
      this.$router.push({ name: "private" });
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
