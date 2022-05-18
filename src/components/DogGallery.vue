<template>
<div>

<div>
    <v-row
      justify="center"
      align="center"
      
    >
      <v-subheader>Offset Top</v-subheader>
      {{ offsetTop }}
    </v-row>
    <v-container
      id="scroll-target"
      style="max-height: 100vh"
      class="overflow-y-auto "
    >

    
      <v-row
        v-scroll:#scroll-target="onScroll"
        align="center"
        justify="center"
        style="height: 1000px"
      >
      <h1>Random dogs</h1>


  <v-card flat>
    <v-card-text>
     
      
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
                color="yellow"
                value= "25"
              ></v-radio>
              <v-radio
                label="50 Dogs"
                color="green"
                value="50"
              ></v-radio>
              <v-radio
                label="Infinite Dogs"
                color="indigo"
                value="infinite"
              ></v-radio>
            </v-radio-group>
          </v-col>
         
          
        
      
    </v-card-text>
  </v-card>




    <v-row
   
    >
      <v-col 
      v-for="(dog, index) in numDogs" 
      :key="index" 
      cols="3">
      <v-card
      
      >
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
      </v-row>
    </v-container>
  </div>

 <!-- <v-container  
  >
    <h1>Random dogs</h1>


  <v-card flat>
    <v-card-text>
      <v-container fluid>
        <v-row
         
        >
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
                color="yellow"
                value= "25"
              ></v-radio>
              <v-radio
                label="50 Dogs"
                color="green"
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




    <v-row
   
    >
      <v-col 
      v-for="(dog, index) in numDogs" 
      :key="index" 
      cols="3">
      <v-card
      
      >
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
  </v-container>-->


  </div>
</template>

<script>
export default {
  name: "DogGallery",

  data: () => ({
      numDog: "25",
      offsetTop: 0,
      
      
  }),
  computed: {
    numDogs() {
      return this.numberOfDogs();
    },
  },

  methods: {
    onScroll (e) {
        this.offsetTop = e.target.scrollTop
      },
    fetchDogs() {
      this.$store.dispatch("getRandomDogs");
    },
    addToFavorites(dog) {
      this.$store.dispatch("addToFavorites", dog);
    },
    numberOfDogs() {
      
       if  (this.numDog === "infinite") {
        return   this.$store.state.randomDogs 
      }

      else if (this.numDog === "50") {
        return   this.$store.state.randomDogs.slice(0, 50)
      }
      
      else if (this.numDog === "25") {
        return   this.$store.state.randomDogs.slice(0, 25)
      }
    },
  },
  mounted() {
    this.fetchDogs();
  },
};
</script>
