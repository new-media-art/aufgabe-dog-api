import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    randomDogs: [],
    dogBreed: []

  },
  getters: {
  },
  mutations: {
    SET_RANDOM_DOGS (state, payload) {
      state.randomDogs = payload
      
    },
    SET_DOG_BREED (state, payload) {
      state.dogBreed = payload
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

        let dogBreed = []

        data.message.forEach(dog1 => {
        
          let x = dog1.split('/')
          dogBreed.push(x[4])

        })

          commit('SET_DOG_BREED', dogBreed)

       })
    }
  },
  modules: {
  }
})
