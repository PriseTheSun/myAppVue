<template>
  <v-carousel color="#FFF" height="100vh" :show-arrows="false" cycle>
    <v-carousel-item src="@/assets/img/pixel.jpg" cover>
      <div
        class="d-flex flex-column fill-height justify-center align-start text-white pa-16 pb-16"
      >
        <h1 class="text-h2 font-weight-medium mb-4 title-size">
          Um lar cheio de amor.
        </h1>
        <h4 class="subheading mb-7 sub-title-text">
          Dê amor e proteção a um animal abandonado e mude a vida
          dele para sempre.
        </h4>
        <v-btn class="btn-size" color="brown-darken-1"> Adotar um amigo </v-btn>
      </div>
    </v-carousel-item>

    <v-carousel-item src="@/assets/img/pixell.jpg" cover>
      <div
        class="d-flex flex-column fill-height justify-center align-start text-white pa-16 pb-16"
      >
        <h1 class="text-h2 font-weight-medium mb-4 title-size">Transforme uma vida.</h1>
        <h4 class="subheading mb-7 sub-title-text">
          Adote um animal.
        </h4>
        <v-btn class="btn-size" color="brown-darken-1"> Adotar um amigo </v-btn>
      </div>
    </v-carousel-item>

    <v-carousel-item src="@/assets/img/pixelll.jpg" cover>
      <div
        class="d-flex flex-column fill-height justify-center align-start text-white pa-16 pb-16"
      >
        <h1 class="text-h2 font-weight-medium mb-4 title-size">
          Ele jamais te abandonará.
        </h1>
        <h4 class="subheading mb-7 sub-title-text">
          Adote um companheiro e sinta todo o carinho que só um amigo peludo
          pode oferecer!
        </h4>
        <v-btn class="btn-size" color="brown-darken-1"> Adotar um amigo </v-btn>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  name: "CarrouselCompornent",
};
</script>
