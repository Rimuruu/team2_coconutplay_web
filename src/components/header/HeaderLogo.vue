<template>
  <div class="header-logo" @click="redirectToHome">
    <img :src="require(`@/assets/${img}.png`)" alt="logo" />
    COCONUT PLAY
  </div>
</template>

<script>
export default {
  name: "HeaderLogo",
  props: {
    img: String
  },
  methods: {
    redirectToHome() {
      this.$router.push({ name: "home" }).catch(() => {});
    }
  }
};
</script>

<style scoped>
.header-logo {
  display: flex;
  align-items: flex-end;
  font-size: 2.5em;
}

.header-logo:hover {
  cursor: pointer;
  color: rgb(191, 21, 77);
}

.header-logo img {
  width: 60px;
  height: 60px;
}
</style>
