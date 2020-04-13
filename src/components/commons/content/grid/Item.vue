<template>
  <div
    class="content-grid-item"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
    @click="goToNews"
  >
    <div class="image" :style="applyCustomStyle">
      <div class="grade">{{ grade }}</div>
      <div v-if="isHover" class="overlay"></div>
    </div>
    <div :class="`title ${isHover ? 'hovered' : ''}`">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentGridItem",
  props: {
    id: Number,
    title: String,
    grade: Number,
    bannerPath: String,
  },
  data() {
    return {
      imageUrl: null,
      isHover: false,
    };
  },
  computed: {
    imageStyle() {
      if (this.bannerPath) {
        return { "background-image": `url(${this.bannerPath})` };
      }
      return { "background-color": "red" };
    },
    applyCustomStyle() {
      return this.imageStyle;
    },
  },

  methods: {
    goToNews() {
      this.$router.push({ name: "news", params: { id: this.id } });
    },
  },
};
</script>

<style>
.content-grid-item {
  color: white;
  background-color: black;
}

.content-grid-item:hover {
  cursor: pointer;
}

.content-grid-item .image {
  background-position: center;
  background-size: cover;
  padding-top: 200px;
  position: relative;
}

.content-grid-item .grade {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
}

.content-grid-item .image .overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.363);
}

.content-grid-item .title {
  padding-top: 25px;
  padding-bottom: 15px;
  padding-left: 25px;
  padding-right: 25px;
  height: 80px;
  font-size: 23px;
  font-weight: bold;

  overflow: hidden;
}

.content-grid-item .title.hovered {
  color: rgba(255, 255, 255, 0.637);
}

@media all and (max-width: 1024px) {
  .content-grid-item .title {
    font-size: 18px;
  }
}
</style>
