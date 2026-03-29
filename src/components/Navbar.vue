<template>
  <header id="header" :class="{ scrolled: isScrolled }">
    <v-container class="d-flex align-center justify-space-between fill-height pa-0">
      <a id="logo" href="/" class="d-flex align-center">
        <svg width="40" height="40" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M74 211.658C99.0457 142.251 155.836 87.1314 226.717 108.765C276.177 123.861 255.428 151.992 274.648 170.486C285.492 178.829 314.933 167.631 322.548 178.047C329.28 187.259 324.416 204.065 322.548 215.097C315.179 258.597 265.313 265 223.065 265" stroke="currentColor" stroke-opacity="0.9" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M325 194C321.518 187.392 313.572 181.214 304 176" stroke="currentColor" stroke-opacity="0.9" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M132.242 181.22C129.728 194.908 90.9731 288.143 131.095 296.086C205.608 306.73 196.665 221.971 196.665 169" stroke="currentColor" stroke-opacity="0.9" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M234 168V173" stroke="currentColor" stroke-opacity="0.9" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="title_logo ml-3">I Want My Pet</span>
      </a>

      <nav id="nav" class="d-none d-md-flex">
        <ul id="menu" class="d-flex align-center list-none ma-0 pa-0">
          <li><a href="#sobre" class="nav-link">Sobre</a></li>
          <li><a href="#contato" class="nav-link">Contato</a></li>
          <li><a href="#bichinhos" class="nav-link">Bichinhos</a></li>
          <li>
            <v-btn variant="outlined" color="white" size="small" class="ml-4" href="#bichinhos">
              <Heart :size="16" class="mr-1" />
              Adotar
            </v-btn>
          </li>
        </ul>
      </nav>

      <button
        id="btn-mobile"
        class="d-md-none"
        aria-label="Abrir Menu"
        @click="toggleMenu"
      >
        <List :size="24" />
      </button>
    </v-container>

    <transition name="slide">
      <div v-if="menuOpen" id="mobile-menu" class="d-md-none">
        <ul class="list-none ma-0 pa-0">
          <li><a href="#sobre" class="mobile-link" @click="menuOpen = false">Sobre</a></li>
          <li><a href="#contato" class="mobile-link" @click="menuOpen = false">Contato</a></li>
          <li><a href="#bichinhos" class="mobile-link" @click="menuOpen = false">Bichinhos</a></li>
        </ul>
      </div>
    </transition>
  </header>
  <carrousel />
</template>

<script>
import { Heart, List } from 'lucide-vue-next'
import Carrousel from '@/components/Carrousel.vue'

export default {
  name: 'NavbarSearch',
  components: {
    Carrousel,
    Heart,
    List,
  },
  data() {
    return {
      menuOpen: false,
      isScrolled: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
  },
}
</script>

<style scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

#header.scrolled {
  background: #6D4C41;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.title_logo {
  color: #fff;
  font-weight: 700;
  font-size: 1.25rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: opacity 0.2s;
}

.nav-link:hover {
  opacity: 0.8;
}

#btn-mobile {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem;
}

#mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #5D4037;
  padding: 1rem;
}

.mobile-link {
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 425px) {
  .title_logo {
    display: none;
  }
}
</style>
