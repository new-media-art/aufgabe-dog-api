<template>
  <v-container>
    <h1>Random dogs</h1>
<!--radio-->

  <v-card flat>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="6"
          >
            <v-radio-group
              v-model="numDog"
              column
            >
              <v-radio
                label="25 Dogs"
                color="red"
                value= "25"
              ></v-radio>
              <v-radio
                label="50 Dogs"
                color="red darken-3"
                value="50"
              ></v-radio>
              <v-radio
                label="Infinite Dogs"
                color="indigo"
                value="infinite"
              ></v-radio>
            </v-radio-group>
          </v-col>
         
          
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>




    <v-row>
      <v-col 
      v-for="(dog, index) in numDogs" 
      :key="index" 
      cols="3">
      <v-card>
           <v-img
              :src="dog"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="300px"
            >
             <v-card-title class="text-uppercase">{{ $store.state.dogBreed[index] }} </v-card-title>
             
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon @click="addToFavorites(dog)">mdi-heart</v-icon>
              </v-btn>

            </v-card-actions>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DogGallery",

  data: () => ({
      numDog: "25",
      
      
  }),
  computed: {
    numDogs() {
      return this.numberOfDogs()
    }
  },
   
  methods: {
    fetchDogs() {
      this.$store.dispatch('getRandomDogs')
    },
    addToFavorites (dog) {
      this.$store.dispatch('addToFavorites',  dog )
    },
    numberOfDogs() {
      if (this.numDog === "infinite") {
        return   this.$store.state.randomDogs
      }
      else if (this.numDog === "50") {
        return   this.$store.state.randomDogs.slice(0, 50)
      }
      else if (this.numDog === "25") {
        return   this.$store.state.randomDogs.slice(0, 25)
      }
    else {
      return this.$store.state.randomDogs
    }
      
      
    }
  },
  mounted () {
    this.fetchDogs()
  }
  
};
</script>
