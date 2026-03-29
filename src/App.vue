<template>
  <v-app>
    <navbar />
    <main>
      <section id="sobre">
        <card-grid />
      </section>
      <section id="contato">
        <parallax />
      </section>
      <section id="bichinhos">
        <tabs />
      </section>
    </main>
    <Foo />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CardGrid from '@/components/CardGrid.vue'
import Parallax from './components/Parallax.vue'
import Tabs from '@/components/Tabs.vue'
import Foo from './components/Foo.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    CardGrid,
    Parallax,
    Tabs,
    Foo,
  },
}
</script>
