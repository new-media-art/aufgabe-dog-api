
import Vue from "vue";
import Vuex from "vuex";

const STORAGE_KEY = "favorites";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    randomDogs: [],
    moreDogs: [],
    dogBreed: [],
    dogList: [],
    oneBreed: [],
    oneBreedName: [],
    favorites: [],
  },
  getters: {
    favoriteDogs(state) {
      return state.favorites;
    },
    concatDogs(state) {
      
      state.randomDogs = state.randomDogs.concat(state.moreDogs) 
      return state.randomDogs
      
    }

  },
  mutations: {
    SET_RANDOM_DOGS(state, payload) {
      state.randomDogs = payload;
    },
    SET_MORE_DOGS(state, payload) {
      state.moreDogs = payload;
      console.log("get more3")
    },
    SET_DOG_BREED(state, payload) {
      state.dogBreed = payload;
    },
    SET_DOG_LIST(state, payload) {
      state.dogList = payload;
    },
    SET_ONE_BREED(state, payload) {
      state.oneBreed = payload;
    },
    SET_ONE_BREED_NAME(state, payload) {
      state.oneBreedName = payload;
    },
    ADD_TO_FAVORITES(state, payload) {
      console.log("payload" + payload);

      state.favorites.push(payload);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.favorites));
    },
    GET_FAVORITES(state) {
      state.favorites = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    },
  },
  actions: {
    getRandomDogs({ commit }) {
      fetch("https://dog.ceo/api/breeds/image/random/50")
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
    getMoreDogs({ commit }) {
      fetch("https://dog.ceo/api/breeds/image/random/20")
        .then((response) => response.json())
        .then((data) => {
          commit("SET_MORE_DOGS", data.message);
          console.log("get more2")

        });
    },

    getDogList() {
      fetch("https://dog.ceo/api/breeds/list/all")
        .then((response) => response.json())
        .then((data) => {
          let dogList = [];

          Object.keys(data.message).forEach((key) => {
            dogList.push(key);
          });

          this.commit("SET_DOG_LIST", dogList);
        });
    },
    selectDogBreed({ commit }, e) {
      let url = "https://dog.ceo/api/breed/" + e + "/images/random/12";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          commit("SET_ONE_BREED", data.message);

          let oneBreedName = [];

          data.message.forEach((dog) => {
            let x = dog.split("/");
            oneBreedName.push(x[4]);
          });

          this.commit("SET_ONE_BREED_NAME", oneBreedName);
        });
    },

    addToFavorites({ commit }, dog) {
      commit("ADD_TO_FAVORITES", dog);
    },
    favoriteDogs({ commit }) {
      commit("GET_FAVORITES");
    },
  },
  modules: {},
});
