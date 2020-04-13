<template>
  <div class="comment">
    <div class="comment-header">
      #{{ index }} - Par <span class="username">{{ username }}</span> le
      {{ new Date(date).toUTCString() }}
    </div>
    <div class="comment-text">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    index: Number,
    username: String,
    text: String,
    date: String,
  },
};
</script>

<style scoped>
.comment {
  background-color: white;
  padding: 20px;
}

.comment .comment-header {
  margin-bottom: 20px;
}

.comment .comment-header > .username {
  color: #40565e;
  font-weight: bold;
}
</style>
