<template>
  <div class="news">
    <Content
      :title="game.title"
      :text="game.content"
      :grade="game.grade"
      :name="game.name"
      :category="game.category"
      :imagePath="getImageUrl(game.bannerPath || {})"
      :author="game.author"
      :createdDate="game.createdDate"
      :comments="comments"
      @onSend="createComment($event)"
    />
  </div>
</template>

<script>
import Content from "@/components/commons/content/Content.vue";

export default {
  name: "NewsIndex",
  components: {
    Content,
  },
  computed: {
    game() {
      return this.$store.state.gameTest.gameCache || {};
    },
    comments() {
      return this.$store.state.comment.comments || [];
    },
  },
  async mounted() {
    await this.getAllGames();
    await this.getAllComment();
  },
  methods: {
    getImageUrl({ download_url }) {
      return download_url;
    },
    async getAllGames() {
      await this.$store.dispatch("gameTest/getGame", {
        gameId: this.$route.params.id,
      });
    },
    async getAllComment() {
      await this.$store.dispatch("comment/getAllComments", {
        gameId: this.$route.params.id,
      });
    },
    async createComment(comment) {
      await this.$store.dispatch("comment/putComment", {
        gameId: this.$route.params.id,
        ...comment,
      });
    },
  },
};
</script>

<style scoped>
.home {
  background-color: #3b3f48;
  width: 100%;
}
</style>
