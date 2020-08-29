import Vue from "vue";
import Vuex from "vuex";

import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data;
    }
  },
  actions: {
    async getUser({ commit }) {
      try {
        const data = await Axios.get("/api/v1/portfolio/fxomar");
        commit("SET_USER", data);
      } catch (error) {
        console.error(error);
      }
    }
  }
});
