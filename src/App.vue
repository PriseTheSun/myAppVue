<template>
<navbar/>
<card-grid/>
<parallax/>
<tabs/>
<footer-component/>
</template>

<script>

import Navbar from "@/components/Navbar.vue"
import CardGrid from "@/components/CardGrid.vue";
import Parallax from "./components/Parallax.vue";
import Tabs from "@/components/Tabs.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: 'App',

  components: {
    Navbar,
    CardGrid,
    Tabs,
    FooterComponent,
    Parallax
  },

  data: () => ({
    //
  }),
}
</script>
