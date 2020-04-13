import axios from "axios";

const HOST = "http://localhost";
const PORT = 3000;

const state = {
  comments: [],
};

const mutations = {
  setComments(state, { comments }) {
    state.comments = comments;
  },
};

const actions = {
  async getAllComments({ commit }, { gameId }) {
    try {
      const response = await axios.get(`${HOST}:${PORT}/game/${gameId}/comments`);
      const comments = response.data.data;
      commit("setComments", { comments });
    } catch (e) {
      console.error(e);
    }
  },
  async putComment({ commit }, { gameId, username, email, text }) {
    try {
      const comment = { username, email, text };
      const response = await axios.put(`${HOST}:${PORT}/game/${gameId}/comment`, comment);
      const comments = response.data.data;
      commit("setComments", { comments });
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
