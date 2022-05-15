<template>
  <v-container>
    <v-row> </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DogBreed",

  data: () => ({}),
  methods: {
    getDogList() {
      this.$store.dispatch("getDogList");
    },
  },
  mounted() {
    this.getDogList();
  },
};
</script>
