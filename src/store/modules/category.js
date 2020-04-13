import axios from "axios";

const HOST = "http://localhost";
const PORT = 3000;

const state = {
  categories: [],
};

const mutations = {
  setCategories(state, { categories }) {
    state.categories = categories;
  },
};

const actions = {
  async getAllCategories({ commit }) {
    try {
      const response = await axios.get(`${HOST}:${PORT}/categories`);
      const categories = response.data.data;
      commit("setCategories", { categories });
    } catch (e) {
      console.error(e);
    }
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
