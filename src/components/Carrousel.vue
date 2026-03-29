<template>
  <v-carousel
    color="#FFF"
    height="100vh"
    :show-arrows="false"
    cycle
    hide-delimiter-background
    delimiter-icon="minus"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.image"
      cover
    >
      <div class="carousel-overlay">
        <v-container class="fill-height">
          <v-row class="align-center">
            <v-col cols="12" md="8" lg="6">
              <div class="text-white">
                <h1 class="text-h2 text-md-h1 font-weight-bold mb-4 fadeInLeft">
                  {{ slide.title }}
                </h1>
                <p class="text-h6 text-body-1 mb-6 opacity-80 fadeIn">
                  {{ slide.subtitle }}
                </p>
                <v-btn
                  size="large"
                  color="brown-darken-1"
                  prepend-icon="heart"
                  class="px-8"
                >
                  Adotar um amigo
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'CarouselComponent',
  data() {
    return {
      slides: [
        {
          title: 'Um lar cheio de amor.',
          subtitle: 'Dê amor e proteção a um animal abandonado e mude a vida dele para sempre.',
          image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=80',
        },
        {
          title: 'Transforme uma vida.',
          subtitle: 'Adote um animal e ganhe um amigo fiel para toda a vida.',
          image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&q=80',
        },
        {
          title: 'Ele jamais te abandonará.',
          subtitle: 'Adote um companheiro e sinta todo o carinho que só um amigo peludo pode oferecer!',
          image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&q=80',
        },
      ],
    }
  },
}
</script>

<style scoped>
.carousel-overlay {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2));
  width: 100%;
  height: 100%;
}
</style>
