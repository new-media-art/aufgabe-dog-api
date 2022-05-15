
 
  <template>
  <v-container fluid>
    <v-row align="center">
      

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="$store.state.dogList"
          filled
          label="Find Dog Breed"
        ></v-select>
      </v-col>

     

      
    </v-row>
  </v-container>
</template>


<!--@click="selectBreed($event)"-->
<script>
export default {
  name: "DogBreed",

  data: () => ({
      key: ""
      
  }),
  
  methods: {
    getDogList() {
      this.$store.dispatch("getDogList");
    },
  },
  mounted() {
    this.getDogList();
  },
  selectBreed(event) {
            console.log(event.target.value)
        }
};
</script>
