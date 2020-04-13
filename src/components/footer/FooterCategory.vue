<template>
  <div class="footer-category">
    <div class="title">
      {{ name }}
    </div>
    <div class="links">
      <div class="link" v-for="(link, index) in links" v-bind:key="index">
        <router-link
          v-if="link.isUseRouter"
          :to="{ name: 'category', params: { category: link.ref } }"
        >
          {{ link.ref.toUpperCase() }}
        </router-link>
        <a v-else :href="link.ref">{{ link.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterCategory",
  props: {
    name: String,
    links: Array,
  },
};
</script>

<style>
.footer-category .title {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.footer-category .links {
  margin-left: 10px;
}

.footer-category .links .link {
  padding: 3px;
}
</style>
