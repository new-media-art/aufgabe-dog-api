
 
  <template>
 <v-container>
 <v-card
 class="pa-2"
  >
  <v-flex></v-flex>
     <h2 class="mr-4">What dogs do you like?</h2>
    <v-row align="center">
      

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          
          :items ="$store.state.dogList"
          filled
          label="Filter Dogs by breed"
          @change = "selectDogBreed"
        ></v-select>
      </v-col>

     
<v-spacer></v-spacer>
      
   
      <v-col>
            <v-btn class="ma-2 yellow">
            <router-link to="/favorites" class="nav-link">
              <h4 class="pa-16">My favorite Dogs</h4>      
            </router-link>
        
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      </v-col>
    </v-row>
  </v-card>
   
 </v-container>

 

</template>



<script>
export default {
  name: "DogBreed",

  data: () => ({
     
      
  }),
  
  methods: {
    getDogList() {
      this.$store.dispatch("getDogList");
    },
    selectDogBreed(e) { 
        
        this.$store.dispatch('selectDogBreed',  e)

        .then(() => {
          this.$router.push('/OneBreed')
        })


       
    }
    
  },
  mounted() {
    this.getDogList();
  }
};
</script>
