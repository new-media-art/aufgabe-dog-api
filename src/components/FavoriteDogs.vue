<template>
  <div>
    <h1>My Favourite Dogs!  </h1>
         <v-row>
      <v-col 
      v-for="(dog, index) in getFavorites" 
      :key="index" 
      cols="4">
      <v-card>
           <v-img
              :src="dog"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
             
             
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                  <v-icon>
                     mdi-heart-broken 
                  </v-icon>
              
           <!--   @click="removeFavourite(image)" -->
              </v-btn>

            </v-card-actions>
          </v-card>

          
      </v-col>
    </v-row>
   
  </div>
</template>

 

<script>
export default {
  name: 'FavouriteDogs',
  computed: {
     getFavorites () {
      return this.$store.getters.getFavorites
    }
  },
    
  methods: {
  
  
  },
  mounted() {
    
  }
 
  
  }

</script>