<template>
  <v-container class="bg-surface-variant" height="400">
    <v-row no-gutters>
      <v-col v-for="(product, index) in products" :key="index" cols="12" md="6">
        <v-sheet class="ma-2 pb-2">
          <h1 class="mb-6">{{ product.title }}</h1>
          <p>{{ product.description }}</p>
          <v-img class="" :src="product.image" width="100%" cover></v-img>
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
            "Sobre",
          description:
            "A Pet é uma empresa dedicada à adoção de animais de estimação. Com um objetivo claro de ajudar a encontrar um lar amoroso para cada animal, a empresa se destaca por seu compromisso em garantir que todos os animais encontrem uma família responsável e carinhosa. A empresa trabalha com uma equipe altamente treinada e experiente, que garante que cada animal receba os cuidados necessários e seja bem cuidado enquanto espera por um novo lar. A Pet também fornece todos os cuidados veterinários necessários, incluindo vacinas e check-ups de saúde, garantindo que cada animal esteja em boas condições de saúde antes de ser adotado. Além disso, a I Want My oferece orientação e suporte para os novos tutores, ajudando-os a criar um ambiente seguro e amoroso para seus novos pets. A empresa também se preocupa em educar a comunidade sobre a importância da adoção responsável e do cuidado adequado dos animais. A Pet é uma empresa comprometida com a causa da adoção de animais e é a escolha ideal para quem deseja adotar um pet. Com um atendimento diferenciado e um cuidado dedicado, a empresa garante que cada animal receba o amor e o cuidado que merece e encontre um lar para sempre. Se você está procurando um novo companheiro de vida, a I Want My é a empresa que pode ajudá-lo a encontrar o seu novo melhor amigo.",
        },
        {
          image:
            "https://images.pexels.com/photos/6001780/pexels-photo-6001780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    };
  },
};
</script>
