<template>
  <div>
    <div>
      <v-card>
        <carrousel />
        <v-layout>
          <v-app-bar :elevation="0" color="rgba(0, 0, 0, 0)" prominent>
            <v-img
              src=""
              height="125"
            ></v-img>
            
            <v-spacer></v-spacer>

            <v-list v-for="item in items" :key="item.title" class="pl-5 pr-5 font-weight-bold d-none d-lg-flex d-xl-flex">{{
              item.title
            }}</v-list>

            <v-app-bar-nav-icon
              class="d-md-flex d-lg-none"
              color="#fff"
              variant="text"
              @click.stop="drawer = !drawer"
            >
            </v-app-bar-nav-icon>
          </v-app-bar>

          <v-navigation-drawer v-model="drawer" location="right" temporary>
            <v-list :items="items"></v-list>
          </v-navigation-drawer>
        </v-layout>
      </v-card>
    </div>
  </div>
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
        value: "foo",
      },
      {
        title: "Quem Somomos",
        value: "bar",
      },
      {
        title: "Contato",
        value: "fizz",
      },
      {
        title: "Como Chegar",
        value: "buzz",
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
