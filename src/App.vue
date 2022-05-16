<template>
  <v-app>
    <v-app-bar
      app
      color="black"
        
    >
    <v-btn 
    small
    class="mt-4">
      <v-icon>
        mdi-home
        </v-icon>
    </v-btn>
      

      <v-toolbar-title 
      id="dogsTitle"
      class="font-weight-bold  accent-4 white--text pa-2">
      95Dogs
      </v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-btn class="ma-10">
<router-link to="/favorites" class="nav-link">
  <h4 class="pa-6 ">My favorite Dogs</h4>      
</router-link>
        
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>

      <router-view/>

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
#dogsTitle {
  margin-left: 42%;
}
</style>
