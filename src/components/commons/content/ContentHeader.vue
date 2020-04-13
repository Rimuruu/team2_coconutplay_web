<template>
  <div class="content-header">
    <div class="content-header-title">
      <h1>{{ title }}</h1>
    </div>
    <div class="content-header-image" :style="imageStyle">
      <div class="content-header-grade">
        <div class="subtitle-item">Note : {{ grade }}</div>
        <div class="subtitle-item">Jeu : {{ name }}</div>
        <div class="subtitle-item">Catégorie : {{ category }}</div>
      </div>
    </div>
    <div class="content-header-subtitle">
      <div class="author">Par {{ author }}</div>
      <div class="date">Le {{ createdDate | moment("dddd, MMMM Do YYYY") }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentHeader",
  props: {
    title: String,
    grade: Number,
    name: String,
    category: String,
    author: String,
    imagePath: String,
    createdDate: String
  },
  data() {
    return {
      imageUrl: null
    };
  },
  computed: {
    imageStyle() {
      if (this.imagePath) {
        return { "background-image": `url("${this.imagePath}")` };
      }
      return { "background-color": "red" };
    }
  }
};
</script>

<style scoped>
.content-header {
  width: 100%;
}

.content-header .content-header-title {
  text-align: center;
  font-size: 30px;
}

.content-header .content-header-image {
  background-position: center;
  background-size: cover;
  padding-top: 600px;
  position: relative;
}

.content-header .content-header-subtitle {
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;

  font-size: 1.5em;
  font-weight: bold;

  display: flex;
  justify-content: space-between;
}

.content-header .content-header-grade {
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;

  box-sizing: border-box;

  font-size: 1.2em;
  font-weight: bold;

  display: flex;
  justify-content: space-between;
  position: absolute;
  top: -45px;
}

.content-header-grade .subtitle-item {
  background-color: #4f5f59;
  color: white;
  padding: 8px;
}
</style>
