<template>
<div>
  <dogs-breed />
   
  <dog-gallery />
   
</div>
</template>

<script>
import DogGallery from "../components/DogGallery";
import DogsBreed from "../components/DogsBreed.vue"


export default {
  name: "HomeView",

  components: {
   
   DogsBreed,
    DogGallery
    
    
    
  },
};
</script>
