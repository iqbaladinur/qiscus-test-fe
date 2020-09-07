import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: localStorage.getItem('userData') ? true : false
  },
  mutations: {
    setLogin:(state, status) => {
      state.isLogin = status
    }
  },
  actions: {
    setLogin:(context, status) => {
      context.commit('setLogin', status);
    }
  },
  modules: {
  }
})
