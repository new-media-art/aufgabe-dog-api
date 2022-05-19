<template>
   <v-app-bar
      app
      color="black"
        
    >
   
            <router-link to="/">
                 <v-btn 
                    class="mt-4">
                    <v-icon>
                      mdi-home
                    </v-icon>
                </v-btn>
            </router-link>
      

      <v-toolbar-title 
      id="dogsTitle"
      class="font-weight-bold  accent-4 white--text pa-2">
      95Dogs
      </v-toolbar-title>
      <v-divider></v-divider>
<h2 class="d-block pa-2 deep-purple accent-4 white--text">
 from  Ulrich for 
</h2>
<h2 class="d-block pa-2 white accent-4 black--text" >
   Streamdiver
</h2>
     
    </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>