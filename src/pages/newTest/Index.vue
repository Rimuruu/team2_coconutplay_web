<template>
  <div class="new-test">
    <div class="part">
      <fieldset>
        <legend>LE JEU</legend>
        <label for="name" id="label-name">Nom : </label>
        <input
          required
          v-model="game.name"
          maxlength="50"
          type="text"
          id="name"
          name="name"
          placeholder="Nom du jeu"
        />

        <label for="category">Catégorie : </label>
        <select required v-model="game.category" id="category" name="category">
          <option v-for="(category, index) in categories" v-bind:key="index" :value="category">
            {{ category.toUpperCase() }}
          </option>
        </select>
      </fieldset>
    </div>
    <div class="part">
      <fieldset class="data-article">
        <legend>LE TEST</legend>
        <label for="title" id="label-title">Titre : </label>
        <input
          required
          v-model="game.title"
          maxlength="50"
          type="text"
          id="title"
          name="title"
          placeholder="Titre du test"
        />

        <label for="image" id="label-image">Image : </label>
        <input
          required
          v-model="game.imageUrl"
          type="url"
          id="image"
          name="image"
          placeholder="URL de l'image"
        />

        <label for="author" id="label-author">Auteur : </label>
        <input
          required
          v-model="game.author"
          maxlength="30"
          type="text"
          id="author"
          name="author"
          placeholder="John Doe"
        />

        <label for="write-test">Rédaction du test :</label>
        <textarea
          required
          v-model="game.content"
          id="write-test"
          name="write-test"
          rows="15"
          cols="23"
        >
        </textarea>

        <label for="grade" id="label-grade">Note : </label>
        <select required v-model="game.grade" id="grade" name="grade">
          <option v-for="i in 100" :key="i" :value="i">{{ i }}</option>
        </select>
        <label id="label-grade">Visibilité : </label>
        <select required v-model="game.visibility" id="visibility" name="visibility">
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      </fieldset>
    </div>

    <a href="#" @click="send">Envoyer</a>
  </div>
</template>

<script>
export default {
  name: "NewTestIndex",
  data() {
    return {
      game: {
        content: null,
        author: null,
        name: null,
        title: null,
        imageUrl: null,
        category: null,
        grade: null,
        visibility:"public",
      },
    };
  },
  computed: {
    categories() {
      return this.$store.state.category.categories;
    },
  },
  async mounted() {
    await this.$store.dispatch("category/getAllCategories");
  },
  methods: {
    async send(e) {
      if (!this.game.category) {
        this.game.category = this.categories[0];
      }

      await this.$store.dispatch("gameTest/putGame", { game: this.game });
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
.new-test {
  background-color: #3b3f48;
  min-height: 100%;
  color: aliceblue;

  padding-right: 30px;
  padding-left: 30px;

  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
}

.new-test .part {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.new-test fieldset {
  display: flex;
  flex-direction: column;
}

.new-test input {
  width: 20%;
  padding: 10px;
  padding-left: 20px;
  background-color: #cdd8dc;
  border-style: none;
  border: #9b9b9b solid 1px;
  margin-bottom: 10px;
}

.new-test label {
  margin-top: 20px;
  margin-bottom: 10px;
}

.new-test select {
  width: 20%;
  padding: 10px;
  padding-left: 20px;
  background-color: #cdd8dc;
  border-style: none;
  border: #9b9b9b solid 1px;
  margin-bottom: 10px;
}

.new-test textarea {
  resize: none;
  width: 100%;

  padding: 20px;

  box-sizing: border-box;

  background-color: #cdd8dc;
}

.new-test a {
  float: right;
  background-color: #167dac;
  padding: 8px;
  margin-top: 10px;
  width: 60px;
}
</style>
