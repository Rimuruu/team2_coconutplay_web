import axios from "axios";

const HOST = "http://localhost";
const PORT = 3000;

const state = {
  games: [],
  gameCache: null,
};

const mutations = {
  setGameTests(state, { games }) {
    state.games = games;
  },
  setGameTestCache(state, { game }) {
    state.gameCache = game;
  },
};

const actions = {
  async getAllGames({ commit }) {
    try {
      const response = await axios.get(`${HOST}:${PORT}/games`);
      const games = response.data.data;
      commit("setGameTests", { games });
    } catch (e) {
      console.error(e);
    }
  },
  async getAllGamesByCategory({ commit }, { category }) {
    try {
      const response = await axios.get(`${HOST}:${PORT}/games/category/${category}`);
      const games = response.data.data;
      commit("setGameTests", { games });
    } catch (e) {
      console.error(e);
    }
  },
  async getGame({ state, commit }, { gameId }) {
    if (state.games.length > 0) {
      state.gameCache = state.games.find((x) => x.id == gameId);
    }

    try {
      const response = await axios.get(`${HOST}:${PORT}/game/${gameId}`);
      const game = response.data.data;
      commit("setGameTestCache", { game });
    } catch (e) {
      console.error(e);
    }
  },
  async putGame({ state, commit }, { game }) {
    try {
      const response = await axios.put(`${HOST}:${PORT}/game`, game);
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
