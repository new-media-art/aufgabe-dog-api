<template>
<div>
   <dogs-breed />
  <dog-gallery />
  <one-breed />
  
 
</div>
</template>

<script>
import DogGallery from "../components/DogGallery";
import DogsBreed from "../components/DogsBreed.vue"
import OneBreed from "../components/OneBreed.vue"

export default {
  name: "HomeView",

  components: {
    
    DogGallery,
    DogsBreed,
    OneBreed
    
  },
};
</script>
