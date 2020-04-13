<template>
  <div class="content-article">
    <div class="content-article-text" v-html="text"></div>
    <div class="content-article-grade">
      <div class="subtitle-item">Note : {{ grade }}</div>
      <div class="subtitle-item">Jeu : {{ name }}</div>
      <div class="subtitle-item">Catégorie : {{ category }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentArticle",
  props: {
    text: String,
    grade: Number,
    name: String,
    category: String,
  },
};
</script>

<style scoped>
.content-article .content-article-text {
  padding: 40px;
  font-size: 1.2em;
}

.content-article .content-article-grade {
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 20px;
  width: 100%;

  box-sizing: border-box;

  font-size: 1.2em;
  font-weight: bold;

  display: flex;
  justify-content: space-between;
}
</style>
