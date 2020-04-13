<template>
  <div class="content">
    <div class="separator">
      <div class="separator-border"></div>
    </div>
    <ContentHeader
      :title="title"
      :grade="grade"
      :name="name"
      :category="category"
      :imagePath="imagePath"
      :author="author"
      :createdDate="createdDate"
    />
    <ContentArticle :text="text" :grade="grade" :name="name" :category="category" />
    <ContentComment :comments="comments" @onSend="$emit('onSend', $event)" />
  </div>
</template>

<script>
import ContentHeader from "@/components/commons/content/ContentHeader.vue";
import ContentArticle from "@/components/commons/content/ContentArticle.vue";
import ContentComment from "@/components/commons/content/ContentComment.vue";

export default {
  name: "Content",
  components: {
    ContentArticle,
    ContentHeader,
    ContentComment,
  },
  props: {
    text: String,
    title: String,
    grade: Number,
    name: String,
    category: String,
    imagePath: String,
    author: String,
    createdDate: String,
    comments: Array,
  },
};
</script>

<style scoped>
.content .separator {
  width: 100%;
  box-sizing: border-box;
  padding-left: 80px;
  padding-right: 80px;
}

.content .separator .separator-border {
  border-top: black solid 1px;
}
</style>
