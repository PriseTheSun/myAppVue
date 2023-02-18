<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar color="blue-grey-darken-1" prominent>
        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
        class="d-none d-lg-flex d-xl-flex"
        value="recent"
        >
          <v-icon>mdi-home</v-icon>

          Home
        </v-btn>

        <v-btn
        class="d-none d-lg-flex d-xl-flex"
        value="favorites"
        >
          <v-icon>mdi-heart</v-icon>

          Serviços
        </v-btn>

        <v-btn
        class="d-none d-lg-flex d-xl-flex"
        value="nearby"
        >
          <v-icon>mdi-map-marker</v-icon>

          Localização
        </v-btn>

        <v-app-bar-nav-icon
          class="d-md-flex d-lg-none"
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-app-bar>

      <v-navigation-drawer
        class="d-md-flex d-lg-none"
        v-model="drawer"
        location="right"
        temporary
      >
        <v-list :items="items"></v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh">
        <Carrousel />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import Carrousel from "./Carrousel.vue";

export default {
  name: "NavbarSearch",

  components: {
    Carrousel,
  },

  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: "Home",
        value: "home",
      },
      {
        title: "Serviços",
        value: "servicos",
      },
      {
        title: "Localização",
        value: "localizacao",
      },
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
