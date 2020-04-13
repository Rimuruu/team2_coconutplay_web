<template>
  <div class="main">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: calc(100% - 300px);
}

.main .container {
  background-color: #d8d8d8;

  max-width: 1280px;
  width: 100%;
  min-height: 100%;
  padding-top: 78px;
}
</style>
