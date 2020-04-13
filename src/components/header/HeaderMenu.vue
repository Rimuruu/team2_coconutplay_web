<template>
  <div class="header-menu">
    <div class="links">
      <router-link :to="{ name: 'home' }">
        HOME
      </router-link>
      <router-link :to="{ name: 'newTest' }">
        NOUVEAU TEST
      </router-link>
    </div>
    <!--div class="user">US</div-->
  </div>
</template>

<script>
export default {
  name: "HeaderMenu",
};
</script>

<style scoped>
.header-menu {
  display: flex;
  align-items: center;
}

.header-menu > .user {
  margin-left: 20px;
  margin-right: 5px;
  background-color: cornflowerblue;
  padding: 20px;

  border-radius: 60px;
}

.header-menu > .links a {
  margin-left: 10px;
  margin-right: 10px;

  font-size: 20px;
}
</style>
