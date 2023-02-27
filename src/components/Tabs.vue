<template>
  <v-card>
    <v-dialog v-model="dialog" width="100vh">
      <v-card>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-img :src="dialogImage" aspect-ratio="1" cover />
            </v-col>
            <v-col
              cols="12"
              md="6"
              class="d-flex flex-column justify-start pd-16"
            >
              <v-row class="justify-space-between">
                <v-card-title class="fadeInLeft">{{
                  dialogTitle
                }}</v-card-title>
                <v-icon
                  class="mr-3 mt-3 rotateIn"
                  icon
                  @click="dialog = false"
                  absolute
                  top
                  right
                  >mdi-close</v-icon
                >
              </v-row>
              <v-card-text class="fadeIn">{{ dialogDescription }}</v-card-text>
              <shere-btn />
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
    <v-tabs v-model="tab" color="brown-darken-1" align-tabs="center">
      <v-tab :value="1">Gatos</v-tab>
      <v-tab :value="2">Cachorros</v-tab>
      <v-tab :value="3">Coelhos</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item v-for="n in 3" :key="n" :value="n">
        <v-container fluid>
          <v-row>
            <v-col
              v-for="(image, index) in images[n - 1]"
              :key="index"
              cols="12"
              md="4"
            >
              <v-img
                :src="image.src"
                :lazy-src="`https://picsum.photos/10/6?image=${index}`"
                aspect-ratio="1"
                cover
                @click="openDialog(image.src, image.title, image.description)"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
import ShereBtn from "@/components/ShereBtn.vue";

export default {
  name: "TabsComponent",

  components: {
    ShereBtn,
  },
  data() {
    return {
      tab: 1,
      images: [
        //CATS TAB
        [
          {
            src: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá sou: Saphira",
            description:
              "Saphira é uma gata de olhos verdes e pelagem de três cores. Com personalidade carinhosa e brincalhona, ele adora passar horas se divertindo com brinquedos e explorando sua casa. Seu olhar intenso e curioso é capaz de derreter o coração de qualquer um. Não perca a chance de conhecer esse lindo felino!.",
          },
          {
            src: "https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá sou: Simba",
            description:
              "Simba é um gato rajado, com pelos macios e um olhar penetrante. Ele é muito curioso e adora explorar novos ambientes, mas também é bastante apegado aos seus donos. É brincalhão e adora receber carinho, mas também sabe ser independente. Com seu porte elegante e pelagem marcante, Simba é um gato que chama a atenção por onde passa.",
          },
          {
            src: "https://images.pexels.com/photos/2173009/pexels-photo-2173009.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
            title: "Olá sou: Max",
            description:
              "Max é um gato rajado com olhos verdes penetrantes. Ele é um felino elegante e charmoso, que adora brincar e receber carinho. Seus olhos verdes hipnotizam a todos que o veem e sua pelagem rajada o torna ainda mais bonito e único.",
          },
          {
            src: "https://images.pexels.com/photos/747795/pexels-photo-747795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá sou: Cléo",
            description:
              "Cléo é uma gato rajado com olhos comuns. Uma felina curiosa e adora se enfiar em caixas e sacolas. Cléo é muito brincalhona e gosta de receber carinho, principalmente na barriga. Ela é uma companheira fiel e adora dormir ao lado de seus humanos.",
          },
          {
            src: "https://images.pexels.com/photos/7140797/pexels-photo-7140797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá sou: Neve",
            description:
              "Neve é um gato branco com manchas rajadas em sua pelagem sedosa. Seus olhos comuns combinam perfeitamente com sua personalidade tranquila e afetuosa. Com uma aparência delicada e elegante, Neve conquista o coração de todos que o conhecem.",
          },
          {
            src: "https://images.pexels.com/photos/3859933/pexels-photo-3859933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá sou: Rajah",
            description:
              "Rajah é um gato rajado que lembra um pequeno tigre, com pelagem listrada em tons de marrom e laranja. Seus olhos são comuns, mas parecem penetrar na alma de quem o olha. Rajah é um gato arisco, que prefere ficar na dele e observar o ambiente ao seu redor antes de se aproximar das pessoas.",
          },
        ],
        //DOGS TAB
        [
          {
            src: "https://imgs.search.brave.com/TCenV15AAdyf8ahXSUXxSwfQUKnRWiVX1vwCqEZwfIg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9waXh5/Lm9yZy9zcmMvMC8x/MDQ5LmpwZw",
            title: "Olá sou: Luna",
            description:
              "Luna é uma fofa filhote de hotvailer com um temperamento amoroso e brincalhão. Ela é muito curiosa e adora explorar novos lugares e objetos. Luna é uma ótima companheira para brincar e também para relaxar, adorando um carinho e aconchego. Com seus olhinhos brilhantes e sua personalidade encantadora, Luna certamente será a alegria da sua casa!",
          },
          {
            src: "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá sou: Charlie",
            description:
              "Charlie é um border collie enérgico e inteligente, com um instinto de pastoreio forte. Ele adora correr, brincar e aprender novos truques, além de ser um companheiro fiel e brincalhão para sua família. Com sua pelagem sedosa e manchas características, Charlie é um cachorro cheio de personalidade e charme.",
          },
          {
            src: "https://images.pexels.com/photos/1739125/pexels-photo-1739125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá sou: Winston",
            description:
              "Winston é um Buldogue Inglês com um olhar intimidador, mas um coração de ouro. Com sua pelagem curta e enrugada, ele adora dormir em sofás confortáveis e está sempre ansioso para receber carinho e atenção dos seus humanos. Apesar de sua aparência robusta, Winston é um cachorro gentil e leal que fará de tudo para proteger sua família.",
          },
          {
            src: "https://imgs.search.brave.com/LjtWbjh8qFx1440U9KAHAR-kloEzT3h6vFgCGNgOrjE/rs:fit:1200:1200:1/g:ce/aHR0cDovL3Bicy50/d2ltZy5jb20vbWVk/aWEvQ2FZb0RBZ1hF/QUl1X0Z5LmpwZzps/YXJnZQ",
            title: "Olá somos: Brutus & Bella",
            description:
              "Brutus & Bella são filhotes de Shar-pei brincalhões e cheios de energia. Eles adoram correr e brincar com seus brinquedos, mas também é são muito afetuosos e adoram um bom carinho.",
          },
          {
            src: "https://images.pexels.com/photos/776373/pexels-photo-776373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá sou: Nala",
            description:
              "Nala é uma cachorra Golden Retriever de pelagem dourada brilhante e olhos castanhos expressivos. Ela é conhecida por sua personalidade doce e gentil, adora brincar e receber carinho. Nala é uma companheira perfeita para quem busca um cão amoroso e leal.",
          },
          {
            src: "https://images.pexels.com/photos/5958289/pexels-photo-5958289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá sou: Bolinha",
            description:
              "Bolinha é um cachorro vira-lata de porte médio, com pelagem marrom e branca. Ele é um companheiro leal e muito amoroso, sempre disposto a brincar e fazer novos amigos. Com sua personalidade amigável e animada, Bolinha conquista todos que cruzam seu caminho.",
          },
        ],
        //RABBITS TAB
        [
          {
            src: "https://images.pexels.com/photos/33152/european-rabbits-bunnies-grass-wildlife.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá, sou: Thumper",
            description:
              "Sou um coelho selvagem que vive em campos abertos. Adoro pular e correr livremente na grama. Meus olhos grandes e orelhas compridas são meus traços marcantes.",
          },
          {
            src: "https://images.pexels.com/photos/10780914/pexels-photo-10780914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá, sou: Floco",
            description:
              "Sou um coelho angorá de pelagem longa e branca. Meus olhos rosa e nariz preto me tornam uma criatura adorável. Adoro ser acariciado e receber atenção.",
          },
          {
            src: "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá, sou: Cenoura",
            description:
              "Sou um coelho doméstico e muito dócil. Adoro cenouras e frutas, e passo a maior parte do tempo roendo e brincando com meus brinquedos. Meus olhos redondos e focinho felpudo são um charme.",
          },
          {
            src: "https://images.pexels.com/photos/5152010/pexels-photo-5152010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá, sou: Ziggy",
            description:
              "Sou um coelho de estimação com uma personalidade brincalhona e energética. Adoro saltar em obstáculos e explorar novos espaços. Minha pelagem cinza e branca é fofa e macia ao toque.",
          },
          {
            src: "https://images.pexels.com/photos/10780922/pexels-photo-10780922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá, sou: Orelhinha",
            description:
              "Sou um coelho de raça, com orelhas compridas e pelagem cinza. Adoro brincar com meus donos e passar horas dormindo enrolado em um cobertor macio. Meu nariz rosa e olhos grandes são meus traços mais cativantes.",
          },
          {
            src: "https://www.mulherportuguesa.com/wp-content/uploads/2016/10/coelho-selvagem.jpg",
            title: "Olá, sou: Bambi",
            description:
              "Sou um coelho selvagem que vive nas florestas. Adoro comer folhas verdes e plantas frescas. Meus olhos brilhantes e pelagem acastanhada são minha marca registrada na natureza.",
          },
        ],
      ],
      dialog: false,
      dialogImage: "",
      dialogTitle: "",
      dialogDescription: "",
    };
  },
  methods: {
    openDialog(image, title, description) {
      this.dialog = true;
      this.dialogImage = image;
      this.dialogTitle = title;
      this.dialogDescription = description;
    },
  },
};
</script>
