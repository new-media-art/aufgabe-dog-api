<template>
<div>
  <dogs-breed />
   <one-breed />
  <dog-gallery />
  <favorite-dogs />
  
 
</div>
</template>

<script>
import DogGallery from "../components/DogGallery";
import DogsBreed from "../components/DogsBreed.vue"
import OneBreed from "../components/OneBreed.vue"
import FavoriteDogs from "../components/FavoriteDogs.vue"

export default {
  name: "HomeView",

  components: {
    
    DogGallery,
    DogsBreed,
    OneBreed,
    FavoriteDogs
    
  },
};
</script>
