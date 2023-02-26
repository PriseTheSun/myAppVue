<template>
    <div class="share-button">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            fab
            dark
            color="brown-darken-1"
            v-on="on"
            @click="showShareButtons = !showShareButtons"
          >
            <v-icon v-if="!showShareButtons">mdi-share-variant</v-icon>
            <v-icon v-else>mdi-close</v-icon>
          </v-btn>
        </template>
        <span>{{ showShareButtons ? 'Fechar' : 'Compartilhar' }}</span>
      </v-tooltip>
  
      <div class="share-buttons" v-if="showShareButtons">
        <v-btn
          fab
          dark
          color="blue darken-4"
          small
          :href="facebookShareUrl"
          target="_blank"
        >
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
  
        <v-btn
          fab
          dark
          color="green darken-4"
          small
          :href="whatsappShareUrl"
          target="_blank"
        >
          <v-icon>mdi-whatsapp</v-icon>
        </v-btn>
  
        <v-btn
          fab
          dark
          color="red darken-2"
          small
          :href="emailShareUrl"
          target="_blank"
        >
          <v-icon>mdi-email</v-icon>
        </v-btn>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showShareButtons: false,
        pageUrl: 'https://iwantmypet.netlify.app',
      };
    },
    computed: {
      facebookShareUrl() {
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${this.pageUrl}`;
        return encodeURIComponent(shareUrl);
      },
      whatsappShareUrl() {
        const shareText = encodeURIComponent(`Olá estou disponível para adoção acesse: ${this.pageUrl}`);
        return `https://web.whatsapp.com/send?text=${shareText}`;
      },
      emailShareUrl() {
        const subject = encodeURIComponent('Awesomeness!');
        const body = encodeURIComponent(`Olá estou disponível para adoção acesse: ${this.pageUrl}`);
        return `mailto:?subject=${subject}&amp;body=${body}`;
      },
    },
  };
  </script>
  
  <style scoped>
  .share-button {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-end;
  }
  
  .share-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
  }
  </style>
  