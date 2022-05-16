<template>
  <v-app>
    <v-app-bar
      app
      shrink-on-scroll  
    >
    <v-btn class="mt-4">
      <v-icon>mdi-home</v-icon>
    </v-btn>
      

      <v-toolbar-title class="font-weight-bold black accent-4 white--text">95Dogs</v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-btn class="mt-4">
        <h4 class="pa-2">My favorite Dogs</h4>
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
