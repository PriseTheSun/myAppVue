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
            title: "Ol?? sou: Saphira",
            description:
              "Saphira ?? uma gata de olhos verdes e pelagem de tr??s cores. Com personalidade carinhosa e brincalhona, ele adora passar horas se divertindo com brinquedos e explorando sua casa. Seu olhar intenso e curioso ?? capaz de derreter o cora????o de qualquer um. N??o perca a chance de conhecer esse lindo felino!.",
          },
          {
            src: "https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Ol?? sou: Simba",
            description:
              "Simba ?? um gato rajado, com pelos macios e um olhar penetrante. Ele ?? muito curioso e adora explorar novos ambientes, mas tamb??m ?? bastante apegado aos seus donos. ?? brincalh??o e adora receber carinho, mas tamb??m sabe ser independente. Com seu porte elegante e pelagem marcante, Simba ?? um gato que chama a aten????o por onde passa.",
          },
          {
            src: "https://images.pexels.com/photos/2173009/pexels-photo-2173009.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
            title: "Ol?? sou: Max",
            description:
              "Max ?? um gato rajado com olhos verdes penetrantes. Ele ?? um felino elegante e charmoso, que adora brincar e receber carinho. Seus olhos verdes hipnotizam a todos que o veem e sua pelagem rajada o torna ainda mais bonito e ??nico.",
          },
          {
            src: "https://images.pexels.com/photos/747795/pexels-photo-747795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Ol?? sou: Cl??o",
            description:
              "Cl??o ?? uma gato rajado com olhos comuns. Uma felina curiosa e adora se enfiar em caixas e sacolas. Cl??o ?? muito brincalhona e gosta de receber carinho, principalmente na barriga. Ela ?? uma companheira fiel e adora dormir ao lado de seus humanos.",
          },
          {
            src: "https://images.pexels.com/photos/7140797/pexels-photo-7140797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Ol?? sou: Neve",
            description:
              "Neve ?? um gato branco com manchas rajadas em sua pelagem sedosa. Seus olhos comuns combinam perfeitamente com sua personalidade tranquila e afetuosa. Com uma apar??ncia delicada e elegante, Neve conquista o cora????o de todos que o conhecem.",
          },
          {
            src: "https://images.pexels.com/photos/3859933/pexels-photo-3859933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Ol?? sou: Rajah",
            description:
              "Rajah ?? um gato rajado que lembra um pequeno tigre, com pelagem listrada em tons de marrom e laranja. Seus olhos s??o comuns, mas parecem penetrar na alma de quem o olha. Rajah ?? um gato arisco, que prefere ficar na dele e observar o ambiente ao seu redor antes de se aproximar das pessoas.",
          },
        ],
        //DOGS TAB
        [
          {
            src: "https://imgs.search.brave.com/TCenV15AAdyf8ahXSUXxSwfQUKnRWiVX1vwCqEZwfIg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9waXh5/Lm9yZy9zcmMvMC8x/MDQ5LmpwZw",
            title: "Ol?? sou: Luna",
            description:
              "Luna ?? uma fofa filhote de hotvailer com um temperamento amoroso e brincalh??o. Ela ?? muito curiosa e adora explorar novos lugares e objetos. Luna ?? uma ??tima companheira para brincar e tamb??m para relaxar, adorando um carinho e aconchego. Com seus olhinhos brilhantes e sua personalidade encantadora, Luna certamente ser?? a alegria da sua casa!",
          },
          {
            src: "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Ol?? sou: Charlie",
            description:
              "Charlie ?? um border collie en??rgico e inteligente, com um instinto de pastoreio forte. Ele adora correr, brincar e aprender novos truques, al??m de ser um companheiro fiel e brincalh??o para sua fam??lia. Com sua pelagem sedosa e manchas caracter??sticas, Charlie ?? um cachorro cheio de personalidade e charme.",
          },
          {
            src: "https://images.pexels.com/photos/1739125/pexels-photo-1739125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Ol?? sou: Winston",
            description:
              "Winston ?? um Buldogue Ingl??s com um olhar intimidador, mas um cora????o de ouro. Com sua pelagem curta e enrugada, ele adora dormir em sof??s confort??veis e est?? sempre ansioso para receber carinho e aten????o dos seus humanos. Apesar de sua apar??ncia robusta, Winston ?? um cachorro gentil e leal que far?? de tudo para proteger sua fam??lia.",
          },
          {
            src: "https://imgs.search.brave.com/LjtWbjh8qFx1440U9KAHAR-kloEzT3h6vFgCGNgOrjE/rs:fit:1200:1200:1/g:ce/aHR0cDovL3Bicy50/d2ltZy5jb20vbWVk/aWEvQ2FZb0RBZ1hF/QUl1X0Z5LmpwZzps/YXJnZQ",
            title: "Ol?? somos: Brutus & Bella",
            description:
              "Brutus & Bella s??o filhotes de Shar-pei brincalh??es e cheios de energia. Eles adoram correr e brincar com seus brinquedos, mas tamb??m ?? s??o muito afetuosos e adoram um bom carinho.",
          },
          {
            src: "https://images.pexels.com/photos/776373/pexels-photo-776373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Ol?? sou: Nala",
            description:
              "Nala ?? uma cachorra Golden Retriever de pelagem dourada brilhante e olhos castanhos expressivos. Ela ?? conhecida por sua personalidade doce e gentil, adora brincar e receber carinho. Nala ?? uma companheira perfeita para quem busca um c??o amoroso e leal.",
          },
          {
            src: "https://images.pexels.com/photos/5958289/pexels-photo-5958289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Ol?? sou: Bolinha",
            description:
              "Bolinha ?? um cachorro vira-lata de porte m??dio, com pelagem marrom e branca. Ele ?? um companheiro leal e muito amoroso, sempre disposto a brincar e fazer novos amigos. Com sua personalidade amig??vel e animada, Bolinha conquista todos que cruzam seu caminho.",
          },
        ],
        //RABBITS TAB
        [
          {
            src: "https://images.pexels.com/photos/33152/european-rabbits-bunnies-grass-wildlife.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Ol??, sou: Thumper",
            description:
              "Sou um coelho selvagem que vive em campos abertos. Adoro pular e correr livremente na grama. Meus olhos grandes e orelhas compridas s??o meus tra??os marcantes.",
          },
          {
            src: "https://images.pexels.com/photos/10780914/pexels-photo-10780914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Ol??, sou: Floco",
            description:
              "Sou um coelho angor?? de pelagem longa e branca. Meus olhos rosa e nariz preto me tornam uma criatura ador??vel. Adoro ser acariciado e receber aten????o.",
          },
          {
            src: "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Ol??, sou: Cenoura",
            description:
              "Sou um coelho dom??stico e muito d??cil. Adoro cenouras e frutas, e passo a maior parte do tempo roendo e brincando com meus brinquedos. Meus olhos redondos e focinho felpudo s??o um charme.",
          },
          {
            src: "https://images.pexels.com/photos/5152010/pexels-photo-5152010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Ol??, sou: Ziggy",
            description:
              "Sou um coelho de estima????o com uma personalidade brincalhona e energ??tica. Adoro saltar em obst??culos e explorar novos espa??os. Minha pelagem cinza e branca ?? fofa e macia ao toque.",
          },
          {
            src: "https://images.pexels.com/photos/10780922/pexels-photo-10780922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Ol??, sou: Orelhinha",
            description:
              "Sou um coelho de ra??a, com orelhas compridas e pelagem cinza. Adoro brincar com meus donos e passar horas dormindo enrolado em um cobertor macio. Meu nariz rosa e olhos grandes s??o meus tra??os mais cativantes.",
          },
          {
            src: "https://www.mulherportuguesa.com/wp-content/uploads/2016/10/coelho-selvagem.jpg",
            title: "Ol??, sou: Bambi",
            description:
              "Sou um coelho selvagem que vive nas florestas. Adoro comer folhas verdes e plantas frescas. Meus olhos brilhantes e pelagem acastanhada s??o minha marca registrada na natureza.",
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
