<template>
  <div class="content-grid">
    <div class="item" v-for="game in games" v-bind:key="game.id">
      <Item
        :id="game.id"
        :bannerPath="getImageUrl(game.bannerPath || {})"
        :title="game.title"
        :grade="game.grade"
        :visibility="game.visibility"
     
      />
    </div>
  </div>
</template>

<script>
import Item from "@/components/commons/content/grid/Item.vue";

export default {
  name: "ContentGrid",
  components: {
    Item,
  },
  props: {
    games: Array,
  },
  
  methods: {
    getImageUrl({ download_url }) {
      return download_url;
    },
  },
};
</script>

<style>
.content-grid {
  display: flex;
  flex-wrap: wrap;
  color: white;

  justify-content: center;

  padding-left: 20px;
  padding-right: 20px;
}

.content-grid .item {
  width: calc(33.333% - 40px);
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

@media all and (max-width: 1024px) {
  .content-grid .item {
    width: calc(50% - 40px);
  }
}

@media all and (max-width: 768px) {
  .content-grid .item {
    width: calc(100% - 40px);
  }
}
</style>
