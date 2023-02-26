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
                <v-card-title class="fadeInLeft">{{ dialogTitle }}</v-card-title>
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
              <shere-btn/>

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
import ShereBtn from '@/components/ShereBtn.vue'

export default {
  name: "TabsComponent",

  components:{
    ShereBtn,
  },
  data() {
    return {
      tab: 1,
      images: [
        //CATS TAB
        [
          {
            src:"https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá sou: Saphira",
            description: "Saphira é uma gata de olhos verdes e pelagem de três cores. Com personalidade carinhosa e brincalhona, ele adora passar horas se divertindo com brinquedos e explorando sua casa. Seu olhar intenso e curioso é capaz de derreter o coração de qualquer um. Não perca a chance de conhecer esse lindo felino!."
          },
          {
            src:"https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá sou: Simba",
            description: "Simba é um gato rajado, com pelos macios e um olhar penetrante. Ele é muito curioso e adora explorar novos ambientes, mas também é bastante apegado aos seus donos. É brincalhão e adora receber carinho, mas também sabe ser independente. Com seu porte elegante e pelagem marcante, Simba é um gato que chama a atenção por onde passa."
          },
          {
            src:"https://images.pexels.com/photos/2173009/pexels-photo-2173009.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
            title: "Olá sou: Max",
            description: "Max é um gato rajado com olhos verdes penetrantes. Ele é um felino elegante e charmoso, que adora brincar e receber carinho. Seus olhos verdes hipnotizam a todos que o veem e sua pelagem rajada o torna ainda mais bonito e único."
          },
          {
            src:"https://images.pexels.com/photos/747795/pexels-photo-747795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá sou: Cléo",
            description: "Cléo é uma gato rajado com olhos comuns. Uma felina curiosa e adora se enfiar em caixas e sacolas. Cléo é muito brincalhona e gosta de receber carinho, principalmente na barriga. Ela é uma companheira fiel e adora dormir ao lado de seus humanos."
          },
          {
            src:"https://images.pexels.com/photos/7140797/pexels-photo-7140797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá sou: Neve",
            description: "Neve é um gato branco com manchas rajadas em sua pelagem sedosa. Seus olhos comuns combinam perfeitamente com sua personalidade tranquila e afetuosa. Com uma aparência delicada e elegante, Neve conquista o coração de todos que o conhecem."
          },
          {
            src:"https://images.pexels.com/photos/3859933/pexels-photo-3859933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá sou: Rajah",
            description: "Rajah é um gato rajado que lembra um pequeno tigre, com pelagem listrada em tons de marrom e laranja. Seus olhos são comuns, mas parecem penetrar na alma de quem o olha. Rajah é um gato arisco, que prefere ficar na dele e observar o ambiente ao seu redor antes de se aproximar das pessoas."
          },     
        ],
        //DOGS TAB
        [
          {
            src:"https://imgs.search.brave.com/TCenV15AAdyf8ahXSUXxSwfQUKnRWiVX1vwCqEZwfIg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9waXh5/Lm9yZy9zcmMvMC8x/MDQ5LmpwZw",
            title: "Gato fofo",
            description: "Este é um gato muito fofo."
          },
          {
            src:"https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Gato listrado",
            description: "Este é um gato com lindas listras."
          },
          {
            src:"https://images.pexels.com/photos/1739125/pexels-photo-1739125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Gato fofo",
            description: "Este é um gato muito fofo."
          },
          {
            src:"https://imgs.search.brave.com/LjtWbjh8qFx1440U9KAHAR-kloEzT3h6vFgCGNgOrjE/rs:fit:1200:1200:1/g:ce/aHR0cDovL3Bicy50/d2ltZy5jb20vbWVk/aWEvQ2FZb0RBZ1hF/QUl1X0Z5LmpwZzps/YXJnZQ",
            title: "Gato fofo",
            description: "Este é um gato muito fofo."
          },
          {
            src:"https://images.pexels.com/photos/776373/pexels-photo-776373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Gato fofo",
            description: "Este é um gato muito fofo."
          },
          {
            src:"https://images.pexels.com/photos/5958289/pexels-photo-5958289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Gato fofo",
            description: "Este é um gato muito fofo."
          },     
        ],
         //RABBITS TAB
         [
          {
            src:"https://images.pexels.com/photos/33152/european-rabbits-bunnies-grass-wildlife.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Olá sou: Saphira",
            description: "Uma gata de olhos verdes e pelagem de três cores. Com personalidade carinhosa e brincalhona, ele adora passar horas se divertindo com brinquedos e explorando sua casa. Seu olhar intenso e curioso é capaz de derreter o coração de qualquer um. Não perca a chance de conhecer esse lindo felino!."
          },
          {
            src:"https://images.pexels.com/photos/10780914/pexels-photo-10780914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Gato listrado",
            description: "Este é um gato com lindas listras."
          },
          {
            src:"https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Gato fofo",
            description: "Este é um gato muito fofo."
          },
          {
            src:"https://images.pexels.com/photos/5152010/pexels-photo-5152010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Gato fofo",
            description: "Este é um gato muito fofo."
          },
          {
            src:"https://images.pexels.com/photos/10780922/pexels-photo-10780922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Gato fofo",
            description: "Este é um gato muito fofo."
          },
          {
            src:"https://www.mulherportuguesa.com/wp-content/uploads/2016/10/coelho-selvagem.jpg",
            title: "Gato fofo",
            description: "Este é um gato muito fofo."
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
