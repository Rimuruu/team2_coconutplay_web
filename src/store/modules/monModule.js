const state = {
  isMyState: true,
  name: "true"
};

const mutations = {
  setIsMyState(state, { isTrue }) {
    state.isMyState = isTrue;
  },
  setName(state, { name }) {
    state.name = name;
  }
};

const actions = {
  toggleMyState(context) {
    if (context.state.isMyState) {
      context.commit("setIsMyState", { isTrue: false });
      return;
    }

    context.commit("setIsMyState", { isTrue: true });
  },
  changeName(context, name) {
    context.commit("setName", { name });
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
