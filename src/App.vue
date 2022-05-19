<template>
<div class="x">
   <v-app>
    <app-bar />

    <v-main>
      <router-view />
    </v-main>
   
  </v-app>
</div>
 
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
html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
