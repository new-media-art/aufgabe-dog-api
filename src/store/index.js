import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    randomDogs: [],
    dogBreed: [],
    dogList: [],
    oneBreed: [],
    oneBreedName: [] 
  },
  getters: {},
  mutations: {
    SET_RANDOM_DOGS(state, payload) {
      state.randomDogs = payload;
    },
    SET_DOG_BREED(state, payload) {
      state.dogBreed = payload;
    },
    SET_DOG_LIST(state, payload) {
      state.dogList = payload;
    },
    SET_ONE_BREED (state, payload) {
      state.oneBreed = payload;
      
    },
    SET_ONE_BREED_NAME(state, payload) {
      state.oneBreedName = payload;
    }
  },
  actions: {
    getRandomDogs({ commit }) {
      fetch("https://dog.ceo/api/breeds/image/random/10")
        // then(checkStatus).
        .then((response) => response.json())
        .then((data) => {
        

          commit("SET_RANDOM_DOGS", data.message);

          let dogBreed = [];

          data.message.forEach((dog1) => {
            let x = dog1.split("/");
            dogBreed.push(x[4]);
          });

          this.commit("SET_DOG_BREED", dogBreed);
        });
    },
   
      getDogList() {
        fetch("https://dog.ceo/api/breeds/list/all")
          
          .then((response) => response.json())
          .then((data) => {
            
            
            let dogList = []
            
            Object.keys(data.message).forEach(key => {
              dogList.push(key)              
            });
              
              this.commit('SET_DOG_LIST', dogList)
 
          });
      },
      selectDogBreed({commit}, e) {
        
        let url = 'https://dog.ceo/api/breed/' +  e + '/images/random/3';
        fetch(url)
        .then(response => response.json())
        .then((data) => {
         
         commit("SET_ONE_BREED", data.message);

          let oneBreedName = [];

          data.message.forEach((dog) => {
            let x = dog.split("/");
            oneBreedName.push(x[4]);
          });
          
          this.commit("SET_ONE_BREED_NAME", oneBreedName);

        })
        
      }
  },
  modules: {},
});
