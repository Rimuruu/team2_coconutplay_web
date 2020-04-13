<template>
  <div class="content-comment">
    <div class="content-comment-header">{{ comments.length }} Commentaires</div>
    <div class="content-comment-container">
      <div v-for="(item, index) in comments" :key="index" class="content-comment-item">
        <Comment
          :index="item.index"
          :username="item.username"
          :text="item.text"
          :date="item.createdDate"
        />
      </div>
      <div class="comment-content-form-add">
        <input v-model="formCommentUsername" type="text" placeholder="Ton username..." />
        <input v-model="formCommentMail" type="text" placeholder="Ton mail.." />
        <textarea
          id="add-comment-text"
          v-model="formCommentText"
          name="comment"
          cols="30"
          rows="3"
          placeholder="Commente par ici ..."
        ></textarea>
        <a href="#" @click="send">Envoyer</a>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/commons/comment/Comment.vue";

export default {
  name: "ContentComment",
  components: {
    Comment,
  },
  props: {
    comments: Array,
  },
  data() {
    return {
      formCommentUsername: "",
      formCommentMail: "",
      formCommentText: "",
    };
  },
  methods: {
    send(e) {
      this.$emit("onSend", this.getParams());
      this.resetField();
      e.preventDefault();
    },
    resetField() {
      this.formCommentUsername = "";
      this.formCommentMail = "";
      this.formCommentText = "";
    },
    getParams() {
      return {
        username: this.formCommentUsername,
        email: this.formCommentMail,
        text: this.formCommentText,
      };
    },
  },
};
</script>

<style scoped>
.content-comment .content-comment-header {
  background-color: #40565e;
  color: white;

  padding: 10px;
  padding-left: 20px;

  font-size: 1.5em;
}

.content-comment .content-comment-container {
  padding: 40px;
}

.content-comment .content-comment-item {
  margin-top: 10px;
}

.content-comment .comment-content-form-add {
  margin-top: 40px;
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
}

.content-comment .comment-content-form-add input {
  width: 20%;
  padding: 10px;
  padding-left: 20px;
  background-color: #cdd8dc;
  border-style: none;
  border: #9b9b9b solid 1px;
  margin-bottom: 10px;
}

.content-comment .comment-content-form-add textarea {
  resize: none;
  width: 100%;

  padding: 20px;

  box-sizing: border-box;

  background-color: #cdd8dc;
}

.content-comment .comment-content-form-add a {
  float: right;
  background-color: #167dac;
  padding: 8px;
  margin-top: 10px;
  width: 60px;
}
</style>
