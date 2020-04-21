import Vue from "vue";
import Vuex from "vuex";

//import item from "@/store/modules/monModule";
import gameTest from "@/store/modules/gameTest";
import category from "@/store/modules/category";
import comment from "@/store/modules/comment";
import account from "@/store/modules/account";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    gameTest,
    category,
    comment,
    account,
  },
});
