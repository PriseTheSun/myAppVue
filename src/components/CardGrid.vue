<template>
  <v-container class="bg-surface-variant" height="400">
    <v-row no-gutters>
      <v-col v-for="(product, index) in products" :key="index" cols="12" md="6">
        <v-sheet class="ma-2 pb-2">
          <h1 class="mb-6">{{ product.title }}</h1>
          <p>{{ product.description }}</p>
          <v-img class="" :src="product.image"  cover></v-img>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "CardGridComponent",

  data() {
    return {
      products: [
        {
          title:
            "Amizade além das espécies",
          description:
            "A amizade entre animais e humanos é algo que tem sido celebrado há séculos. Desde os tempos antigos, as pessoas têm criado laços estreitos com seus animais de estimação, e isso continua a ser verdade até hoje. A relação entre um animal de estimação e seu dono é um exemplo perfeito de como as diferenças de espécies podem ser superadas em nome do amor, compaixão e respeito mútuo. Os animais são conhecidos por trazer alegria e felicidade para nossas vidas, independentemente de sua espécie. A amizade entre um animal de estimação e seu dono é uma conexão inquebrável, que transcende as diferenças de espécies e se baseia na empatia e no amor incondicional. A simples presença de um animal de estimação pode trazer conforto e serenidade, e muitas pessoas consideram seus animais de estimação como membros da família.",
        },
        {
          image:
            "https://imgs.search.brave.com/NvwsnGiM9nytmyIN9wL3hGOOQArGwhwFUfh6jsvxjUE/rs:fit:896:532:1/g:ce/aHR0cDovL3d3dy5h/c29tYWRldG9kb3Nh/ZmV0b3MuY29tL2Nv/bnRlbnQvdXBsb2Fk/cy8yMDE2LzA2L3Vz/dGhlbXAtY2FwYS0y/LmpwZw",
        },
      ],
    };
  },
};
</script>
