<template>
  <v-carousel color="#FFF" height="100vh" :show-arrows="false" cycle>
    <v-carousel-item src="@/assets/img/pixel.jpg" cover>
      <div
        class="d-flex flex-column fill-height justify-center align-start text-white pa-2 pb-2 pa-sm-16 pb-sm-16"
      >
        <h1 class="text-h2 font-weight-medium mb-2 title-size">Um lar cheio de amor.</h1>
        <h4 class="subheading mb-4 sub-title-text">
          Dê amor e proteção a um animal abandonado e mude a vida dele para sempre.
        </h4>
        <v-btn class="btn-size" color="brown-darken-1">Adotar um amigo</v-btn>
      </div>
    </v-carousel-item>
    <v-carousel-item src="@/assets/img/pixell.jpg" cover>
  <div
    class="d-flex flex-column fill-height justify-center align-start text-white pa-2 pb-2 pa-sm-16 pb-sm-16"
  >
    <h1 class="text-h2 font-weight-medium mb-2 title-size">Transforme uma vida.</h1>
    <h4 class="subheading mb-4 sub-title-text">Adote um animal.</h4>
    <v-btn class="btn-size" color="brown-darken-1">Adotar um amigo</v-btn>
  </div>
</v-carousel-item>

<v-carousel-item src="@/assets/img/pixelll.jpg" cover>
  <div
    class="d-flex flex-column fill-height justify-center align-start text-white pa-2 pb-2 pa-sm-16 pb-sm-16"
  >
    <h1 class="text-h2 font-weight-medium mb-2 title-size">Ele jamais te abandonará.</h1>
    <h4 class="subheading mb-4 sub-title-text">
      Adote um companheiro e sinta todo o carinho que só um amigo peludo pode oferecer!
    </h4>
    <v-btn class="btn-size" color="brown-darken-1">Adotar um amigo</v-btn>
  </div>
</v-carousel-item>

</v-carousel>
</template>
<script>
export default {
  name: "CarouselComponent",
};
</script>
<style scoped>
@media(max-width: 600px) {
  .title-size {
    font-size: 24px !important;
  }
  .sub-title-text {
    font-size: 14px !important;
  }
  .btn-size {
    font-size: 12px !important;
    padding: 8px 16px !important;
  }
  .pa-sm-16 {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
  .pb-sm-16 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }
}
</style>