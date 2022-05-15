import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    randomDogs: []

  },
  getters: {
  },
  mutations: {
    SET_RANDOM_DOGS (state, payload) {
      state.randomDogs = payload
      
    }
  },
  actions: {
    getRandomDogs({ commit }) {
      fetch('https://dog.ceo/api/breeds/image/random/10').
     // then(checkStatus).
      then(response => response.json()).
      then(data => {
        console.log(data.message)
        commit('SET_RANDOM_DOGS', data.message)
       })
    }
  },
  modules: {
  }
})
