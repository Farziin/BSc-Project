import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookie from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
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
  },

  plugins: [createPersistedState({
    getState: (key) => Cookie.getJSON(key),
    setState: (key, state) => Cookie.set(key, state, { expires: 0.5, secure: false })
  })]
})
