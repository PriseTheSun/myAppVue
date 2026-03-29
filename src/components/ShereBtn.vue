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
          <Share2 v-if="!showShareButtons" :size="20" />
          <X v-else :size="20" />
        </v-btn>
      </template>
      <span>{{ showShareButtons ? 'Fechar' : 'Compartilhar' }}</span>
    </v-tooltip>

    <div class="share-buttons" v-if="showShareButtons">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn
            fab
            dark
            color="blue darken-4"
            size="small"
            v-on="on"
            :href="facebookShareUrl"
            target="_blank"
          >
            <Facebook :size="18" />
          </v-btn>
        </template>
        <span>Facebook</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn
            fab
            dark
            color="green darken-4"
            size="small"
            v-on="on"
            :href="whatsappShareUrl"
            target="_blank"
          >
            <MessageCircle :size="18" />
          </v-btn>
        </template>
        <span>WhatsApp</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn
            fab
            dark
            color="red darken-2"
            size="small"
            v-on="on"
            :href="emailShareUrl"
            target="_blank"
          >
            <Mail :size="18" />
          </v-btn>
        </template>
        <span>E-mail</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>
import { Share2, X, Facebook, MessageCircle, Mail } from 'lucide-vue-next'

export default {
  name: 'ShareBtn',
  components: {
    Share2,
    X,
    Facebook,
    MessageCircle,
    Mail,
  },
  data() {
    return {
      showShareButtons: false,
      pageUrl: 'https://iwantmypet.netlify.app',
    }
  },
  computed: {
    facebookShareUrl() {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.pageUrl)}`
    },
    whatsappShareUrl() {
      const text = encodeURIComponent(`Olá, estou disponível para adoção! Acesse: ${this.pageUrl}`)
      return `https://web.whatsapp.com/send?text=${text}`
    },
    emailShareUrl() {
      const subject = encodeURIComponent('Pet disponível para adoção!')
      const body = encodeURIComponent(`Olá, estou disponível para adoção! Acesse: ${this.pageUrl}`)
      return `mailto:?subject=${subject}&body=${body}`
    },
  },
}
</script>

<style scoped>
.share-button {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;
}

.share-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
