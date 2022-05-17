<template>
  <v-app>
    <app-bar />

    <v-main>
      <router-view />
    </v-main>
   
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";



export default {
  name: "App",
  components: {
    AppBar,
    
  },
data () {
    return {
      currentPage: 1,
    };
  },
  methods: {
    onPageChange(page) {
      console.log(page)
      this.currentPage = page;
    }
  },
 

  beforeCreate() {
    this.$store.dispatch("favoriteDogs");
  },
};
</script>

<style>
#dogsTitle {
  margin-left: 33%;
}
</style>
