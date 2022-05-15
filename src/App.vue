<template>
  <v-app id="inspire">
    <v-app-bar
      app
      shrink-on-scroll
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>95 Dog Breeds!</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
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
