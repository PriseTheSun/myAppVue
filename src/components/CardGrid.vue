<template>
  <v-container class="py-16">
    <v-row align="center">
      <v-col cols="12" md="6" order-md="2">
        <v-card elevation="0" class="pa-6 pa-md-10 bg-brown-lighten-5 rounded-xl h-100">
          <div class="d-flex align-center mb-4">
            <PawPrint :size="32" class="text-brown-darken-1 mr-3" />
            <h1 class="text-h4 text-md-h3 font-weight-bold">Sobre Nós</h1>
          </div>
          <p class="text-body-1 text-medium-emphasis mb-4">
            Somos uma empresa dedicada à adoção de animais de estimação. Nosso objetivo é ajudar cada animal a encontrar um lar amoroso e responsável.
          </p>
          <p class="text-body-1 text-medium-emphasis mb-4">
            Com uma equipe altamente treinada e experiente, garantimos que cada animal receba os cuidados necessários enquanto espera por uma nova família.
          </p>
          <v-list class="bg-transparent">
            <v-list-item class="px-0" v-for="(item, i) in features" :key="i">
              <template v-slot:prepend>
                <v-avatar color="brown-lighten-3" size="40">
                  <Check :size="20" class="text-brown-darken-2" />
                </v-avatar>
              </template>
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" order-md="1">
        <v-card elevation="0" class="overflow-hidden rounded-xl">
          <v-img
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80"
            aspect-ratio="1.2"
            cover
            class="rounded-xl"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { PawPrint, Check } from 'lucide-vue-next'

export default {
  name: 'CardGridComponent',
  components: {
    PawPrint,
    Check,
  },
  data() {
    return {
      features: [
        'Cuidados veterinários completos',
        'Vacinação e vermifugação em dia',
        'Suporte para novos tutores',
        'Educação sobre adoção responsável',
      ],
    }
  },
}
</script>
