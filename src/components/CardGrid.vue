<template>
  <v-container class="bg-surface-variant" height="400">
    <v-row no-gutters>
      <v-col v-for="(product, index) in products" :key="index" cols="12" sm="6">
        <v-sheet class="ma-2 pa-2">
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
          <v-img :src="product.image"  cover></v-img>
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
            "Amizade além das espécies: a conexão inquebrável entre humanos e animais",
          description:
            "A amizade entre humanos e animais é uma conexão inquebrável, que transcende as diferenças de espécies e se baseia na empatia, amor e respeito mútuo. É impressionante como os animais conseguem tocar nossos corações e trazer alegria para nossas vidas, mesmo em tempos difíceis. Desde um simples afago em um gato até a lealdade de um cão de estimação, os animais nos ensinam o verdadeiro significado do amor incondicional. Eles são nossos companheiros mais fiéis, sempre prontos para nos receber com alegria e afeto, independentemente de como estamos nos sentindo. A amizade entre humanos e animais é uma prova de que a compaixão e a empatia são valores universais, capazes de conectar seres de diferentes espécies e criar laços que duram para sempre.",
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
