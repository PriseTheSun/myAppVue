<template>
  <header id="header">
    <a id="logo" class="d-flex align-center" href=""

      ><svg
        width="50px"
        height="50px"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M74 211.658C99.0457 142.251 155.836 87.1314 226.717 108.765C276.177 123.861 255.428 151.992 274.648 170.486C285.492 178.829 314.933 167.631 322.548 178.047C329.28 187.259 324.416 204.065 322.548 215.097C315.179 258.597 265.313 265 223.065 265"
          stroke="#fff"
          stroke-opacity="0.9"
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M325 194C321.518 187.392 313.572 181.214 304 176"
          stroke="#fff"
          stroke-opacity="0.9"
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M132.242 181.22C129.728 194.908 90.9731 288.143 131.095 296.086C205.608 306.73 196.665 221.971 196.665 169"
          stroke="#fff"
          stroke-opacity="0.9"
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M234 168V173"
          stroke="#fff"
          stroke-opacity="0.9"
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span class="title_logo">I want my pet</span></a
    >

    <nav id="nav">
      <button
        aria-label="Abrir Menu"
        id="btn-mobile"
        aria-haspopup="true"
        aria-controls="menu"
        aria-expanded="false"
      >
        Menu
        <span id="hamburger"></span>
      </button>
      <ul id="menu" role="menu">
        <li><a href="/">Sobre</a></li>
        <li><a href="/">Produtos</a></li>
        <li><a href="/">Portfólio</a></li>
        <li><a href="/">Contato</a></li>
      </ul>
    </nav>
  </header>
  <carrousel />
</template>

<script>
import Carrousel from "@/components/Carrousel.vue";
import navbar from "@/helper/navbar.js";

export default {
  name: "NavbarSearch",

  components: {
    Carrousel,
  },
  created() {
    document.addEventListener("DOMContentLoaded", () => {
      const btnMobile = navbar.btnMobile;
      const toggleMenu = navbar.toggleMenu;
      btnMobile.addEventListener("click", toggleMenu);
      btnMobile.addEventListener("touchstart", toggleMenu);
    });
  },
};
</script>
