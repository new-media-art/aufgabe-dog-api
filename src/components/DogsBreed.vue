
 
  <template>
  <v-container fluid>
    <v-row align="center">
      

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
           v-model="selectedBreed"
          :items ="$store.state.dogList"
          filled
          label="Find Dog Breed"
          @change = "selectDogBreed"
        ></v-select>
      </v-col>

     

      
    </v-row>
  </v-container>
</template>



<script>
export default {
  name: "DogBreed",

  data: () => ({
      selectBreed: ''
      
  }),
  
  methods: {
    getDogList() {
      this.$store.dispatch("getDogList");
    },
    selectDogBreed(e) {
        console.log(e)
    }
    
  },
  mounted() {
    this.getDogList();
  }
};
</script>
