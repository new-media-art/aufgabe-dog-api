<template>
  <v-container>
    
    <v-row>
      <v-col 
      v-for="(dog, index) in $store.state.oneBreed" 
      :key="index" 
      cols="4">
      <v-card>
           <v-img
              :src="dog"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
             <v-card-title class="text-uppercase">{{ $store.state.oneBreedName[index] }} </v-card-title>
             
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon @click="addToFavourites(dog)">mdi-heart</v-icon>
              </v-btn>

            </v-card-actions>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "OneBreed",

  data: () => ({

  }),
  methods: {
    addToFavourites (dog) {
      this.$store.dispatch('addToFavourites',  dog )
    },
  },
  mounted () {
    
    
  }
  
};
</script>
