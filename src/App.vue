<template>
  <v-app>
    <navbar />
    <card-grid />
    <parallax />
    <tabs />
    <Foo />

  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CardGrid from "@/components/CardGrid.vue";
import Parallax from "./components/Parallax.vue";
import Tabs from "@/components/Tabs.vue";
import Foo from "./components/Foo.vue";

export default {
  name: "App",

  components: {
    Navbar,
    CardGrid,
    Tabs,
    Parallax,
    Foo,
  },
};
</script>
