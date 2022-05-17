<template>
  <v-app>
   <app-bar />

    <v-main>

      <router-view/>

    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'

export default {
  name: 'App',
  components: {
    AppBar
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#dogsTitle {
  margin-left: 33%;
}
</style>
