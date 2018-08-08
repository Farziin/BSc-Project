import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    email: null,
    name: null
  },

  mutations: {
    SET_USER (state, {token, email, name}) {
      state.token = token
      state.email = email
      state.name = name
    }
  },

  actions: {
    setUser ({commit}, {token, email, name}) {
      commit('SET_USER', {token: token, email: email, name: name})
    }
  }
})
