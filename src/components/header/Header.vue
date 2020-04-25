<template>
  <div class="header">
    <div class="container">
      <HeaderLogo img="coconut_logo" />
      <HeaderMenu />
    </div>
  </div>
</template>

<script>
import HeaderLogo from "@/components/header/HeaderLogo.vue";
import HeaderMenu from "@/components/header/HeaderMenu.vue";

export default {
  name: "Header",
  components: {
    HeaderLogo,
    HeaderMenu,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  position: fixed;

  z-index: 9999;

  width: 100%;
  height: 80px;

  color: beige;

  text-align: center;

  background-color: #2c2c2c;
  box-sizing: border-box;

  padding-left: 40px;
  padding-right: 40px;
}

.header .container {
  max-width: 1280px;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
