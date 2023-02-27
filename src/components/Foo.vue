<template>
  <v-footer class="bg-brown-darken-1 text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon.name"
        class="mx-4"
        :icon="icon.icon"
        :href="icon.link"
        target="_blank"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">
      Agradecemos de coração por ter adotado um animal! Sua atitude não só salva uma vida, mas também dá um novo lar amoroso para um ser que merece muito. Seu gesto de bondade faz toda a diferença no mundo, tanto para o animal quanto para a sociedade como um todo. Parabéns pela decisão de adotar e por fazer parte da mudança que queremos ver no mundo.
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>I Want my Pet</strong>
      <a class="ml-3" href="https://netcode.dev.br/">Com<span class="mdi mdi-heart"></span><strong>NetCode</strong></a>
    </div>

    <v-btn
      v-if="showBackToTop"
      class="back-to-top"
      fab
      bottom
      right
      x-small
      color="#4E342E"
      @click="scrollToTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",

  data() {
    return {
      showBackToTop: false,

      icons: [
        {
          name: "WhatsApp",
          icon: "mdi-whatsapp",
          link: "https://api.whatsapp.com/send?phone=5511914810122",
        },
        {
          name: "Email",
          icon: "mdi-email",
          link: "contato@netcode.dev.br",
        },
        {
          name: "LinkedIn",
          icon: "mdi-linkedin",
          link: "https://www.linkedin.com/in/araujoerik/",
        },
        {
          name: "Instagram",
          icon: "mdi-instagram",
          link: "https://www.instagram.com/netcode.dev/",
        },
      ],
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (scrollTop > windowHeight / 2) {
        this.showBackToTop = true;
      } else {
        this.showBackToTop = false;
      }
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
.back-to-top {
  position: fixed;
  z-index: 999;
  opacity: 0.8;
  right: 24px;
  bottom: 24px;
  transition: all 0.3s ease-in-out;
}

.back-to-top:hover {
  opacity: 1;
  transform: translateY(-4px);
}
</style>
