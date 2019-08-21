import Vue from 'vue'
import Vuex from 'vuex'
import actions from "./actions";
import mutations from "./mutations";
import moduleA from "@store/moduls/moduleA";

Vue.use(Vuex)

const state = {
  name: "郭亚洁"
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    moduleA
  }
})

export default store;