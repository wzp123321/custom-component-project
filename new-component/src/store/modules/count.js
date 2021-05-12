/** @format */
import * as types from '../mutations';
const app = {
  state: {
    userName: "zpwan"
  },
  mutations: {
    [types.SET_USER_NAME](state, data) {
      state.userName = data;
    }
  },
  actions: {
    setUserName: ({ commit, state }, data) => {
      commit(types.SET_USER_NAME, data);
    }
  }
};

export default app;
