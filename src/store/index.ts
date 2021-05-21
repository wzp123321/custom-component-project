import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    child1: "",
    child2: "",
  },
  mutations: {
    setChild1(state, payload) {
      state.child1 = payload;
    },
    setChild2(state, payload) {
      state.child2 = payload;
    },
  },
  actions: {
    setChild1(context, payload) {
      context.commit("setChild1", payload);
    },
    setChild2(context, payload) {
      context.commit("setChild2", payload);
    },
  },
  getters: {
    child1(state) {
      return state.child1;
    },
    child2(state) {
      return state.child2;
    },
  },
});
