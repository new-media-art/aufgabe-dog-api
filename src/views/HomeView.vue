<template>
<div>
  <dog-gallery />
  <dogs-breed />
</div>
</template>

<script>
import DogGallery from "../components/DogGallery";
import DogsBreed from "../components/DogsBreed.vue"

export default {
  name: "HomeView",

  components: {
    DogGallery,
    DogsBreed
  },
};
</script>
