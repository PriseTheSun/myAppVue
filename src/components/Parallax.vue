<template>
  <v-parallax
    src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&q=80"
    height="400"
    class="my-12"
  >
    <div class="parallax-overlay">
      <v-container class="fill-height">
        <v-row class="align-center justify-center">
          <v-col cols="12" class="text-center">
            <Phone :size="48" class="text-white mb-4" />
            <h1 class="text-h3 text-md-h2 text-md-h1 font-weight-bold text-white mb-4">
              Basta uma Ligação
            </h1>
            <a href="tel:+5599999999999" class="text-h5 text-md-h4 text-white text-decoration-none">
              (99) 9999-9999
            </a>
            <p class="text-body-1 text-white opacity-75 mt-4">
              Estamos prontos para ajudá-lo a encontrar seu novo melhor amigo
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-parallax>
</template>

<script>
import { Phone } from 'lucide-vue-next'

export default {
  name: 'ParallaxComponent',
  components: {
    Phone,
  },
}
</script>

<style scoped>
.parallax-overlay {
  background: linear-gradient(135deg, rgba(109, 76, 65, 0.85), rgba(62, 39, 35, 0.9));
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
