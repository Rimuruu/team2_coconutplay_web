<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app a {
  color: #e7e6e6;
  text-decoration: none;
}

#app a:hover {
  color: rgb(160, 160, 160);
}
</style>
