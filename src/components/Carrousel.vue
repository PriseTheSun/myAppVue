<template>
  <v-carousel cycle color="#FFF" height="100vh" :show-arrows="false">
    <v-carousel-item src="@/assets/img/pixel.jpg" cover>
      <div
        class="d-flex flex-column fill-height justify-center align-start text-white pa-16 pb-16"
      >
        <h1 class="text-h2 font-weight-black mb-4">
          Um lar cheio de amor <br />é o melhor remédio.
        </h1>
        <h4 class="subheading mb-7">
          Faça a sua parte na luta contra maus tratos a animais: adote um amigo
          peludo! <br />Dê amor e proteção a um animal abandonado e mude a vida
          dele para sempre.
        </h4>
        <v-btn color="blue-grey-darken-1"> Adote um amigo! </v-btn>
      </div>
    </v-carousel-item>

    <v-carousel-item src="@/assets/img/pixell.jpg" cover>
      <div
        class="d-flex flex-column fill-height justify-center align-start text-white pa-16 pb-16"
      >
        <h1 class="text-h2 font-weight-black mb-4">Transforme uma vida.</h1>
        <h4 class="subheading mb-7">
          Adote um animal e ganhe um amigo para sempre!
        </h4>
        <v-btn color="blue-grey-darken-1"> Adote um amigo! </v-btn>
      </div>
    </v-carousel-item>

    <v-carousel-item src="@/assets/img/pixelll.jpg" cover>
      <div
        class="d-flex flex-column fill-height justify-center align-start text-white pa-16 pb-16"
      >
        <h1 class="text-h2 font-weight-black mb-4">
          Ele jamais te abandonará.
        </h1>
        <h4 class="subheading mb-7">
          Adote um companheiro e sinta todo o carinho que só um amigo peludo
          pode oferecer!
        </h4>
        <v-btn color="blue-grey-darken-1"> Adote um amigo! </v-btn>
      </div>
    </v-carousel-item>
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
