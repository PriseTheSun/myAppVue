<template>
  <v-carousel hide-delimiters cycle height="100vh" show-arrows="hover">
    <v-carousel-item
      src="../assets/woman.jpg"
      cover
    >
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h1 font-weight-thin mb-4">
        WebBoost
      </h1>
      <h4 class="subheading">
        Build your application today!
      </h4>
    </div>
    </v-carousel-item>

    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  name: "CarrouselCompornent",

  data() {
    return {
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>
