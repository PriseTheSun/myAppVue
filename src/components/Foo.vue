<template>
  <v-footer class="bg-brown-darken-1 text-center pa-0">
    <v-container class="py-12">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <div class="d-flex justify-center flex-wrap mb-6">
            <v-btn
              v-for="icon in socialIcons"
              :key="icon.name"
              :href="icon.link"
              target="_blank"
              icon
              variant="text"
              size="large"
              class="social-btn"
            >
              <component :is="icon.component" :size="24" />
            </v-btn>
          </div>

          <p class="text-body-1 text-white opacity-80 mb-8 px-4">
            Agradecemos de coração por ter adotado um animal! Sua atitude não só salva uma vida, mas também dá um novo lar amoroso para um ser que merece muito.
          </p>

          <v-divider class="my-6 opacity-30" />

          <div class="text-body-2 text-white">
            {{ currentYear }} — <strong>I Want My Pet</strong>
            <span class="mx-2">|</span>
            Feito com
            <Heart :size="14" class="inline-icon mx-1" />
            por
            <a href="https://netcode.dev.br/" target="_blank" class="text-white text-decoration-none font-weight-bold">
              Erik Araujo
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-btn
      v-if="showBackToTop"
      class="back-to-top"
      icon
      size="small"
      color="#4E342E"
      @click="scrollToTop"
    >
      <ChevronUp :size="20" />
    </v-btn>
  </v-footer>
</template>

<script>
import { Heart, ChevronUp, MessageCircle, Mail, Linkedin, Instagram } from 'lucide-vue-next'

export default {
  name: 'FooterComponent',
  components: {
    Heart,
    ChevronUp,
    MessageCircle,
    Mail,
    Linkedin,
    Instagram,
  },
  data() {
    return {
      showBackToTop: false,
      socialIcons: [
        {
          name: 'WhatsApp',
          component: MessageCircle,
          link: 'https://api.whatsapp.com/send?phone=5511914810122',
        },
        {
          name: 'Email',
          component: Mail,
          link: 'mailto:erik.trompa@gmail.com',
        },
        {
          name: 'LinkedIn',
          component: Linkedin,
          link: 'https://www.linkedin.com/in/deverikaraujo',
        },
        {
          name: 'Instagram',
          component: Instagram,
          link: 'https://www.instagram.com/erik.h.araujo?igsh=MWlhMjRxcmEyZTlpOQ==',
        },
      ],
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      this.showBackToTop = scrollTop > windowHeight / 2
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
.social-btn {
  color: #fff !important;
  transition: transform 0.2s, opacity 0.2s;
}

.social-btn:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

.inline-icon {
  display: inline;
  vertical-align: middle;
  color: #ff5252;
}

.back-to-top {
  position: fixed;
  z-index: 999;
  right: 24px;
  bottom: 24px;
  transition: all 0.3s ease-in-out;
}

.back-to-top:hover {
  transform: translateY(-4px);
}
</style>
