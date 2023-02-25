<template>
  <v-card>
    <v-dialog v-model="dialog" width="100vh">
      <v-card>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-img :src="dialogImage" aspect-ratio="1" cover />
            </v-col>
            <v-col cols="12" md="6" class="d-flex flex-column justify-center">
              <v-btn icon @click="dialog = false" absolute top right>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              <v-card-title>{{ dialogTitle }}</v-card-title>
              <v-card-text>{{ dialogDescription }}</v-card-text>
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
                :src="image"
                :lazy-src="`https://picsum.photos/10/6?image=${index}`"
                aspect-ratio="1"
                cover
                @click="
                  openDialog(
                    image,
                    `Image ${index + 1}`,
                    `Description for image ${index + 1}`
                  )
                "
              />
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
export default {
  name: "TabsComponent",
  data() {
    return {
      tab: 1,
      images: [
        [
          "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/2173009/pexels-photo-2173009.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
          "https://images.pexels.com/photos/747795/pexels-photo-747795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/7140797/pexels-photo-7140797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/3859933/pexels-photo-3859933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        [
          "https://imgs.search.brave.com/TCenV15AAdyf8ahXSUXxSwfQUKnRWiVX1vwCqEZwfIg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9waXh5/Lm9yZy9zcmMvMC8x/MDQ5LmpwZw",
          "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/1739125/pexels-photo-1739125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://imgs.search.brave.com/LjtWbjh8qFx1440U9KAHAR-kloEzT3h6vFgCGNgOrjE/rs:fit:1200:1200:1/g:ce/aHR0cDovL3Bicy50/d2ltZy5jb20vbWVk/aWEvQ2FZb0RBZ1hF/QUl1X0Z5LmpwZzps/YXJnZQ",
          "https://images.pexels.com/photos/776373/pexels-photo-776373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5958289/pexels-photo-5958289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        [
          "https://images.pexels.com/photos/33152/european-rabbits-bunnies-grass-wildlife.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/10780914/pexels-photo-10780914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5152010/pexels-photo-5152010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/10780922/pexels-photo-10780922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://www.mulherportuguesa.com/wp-content/uploads/2016/10/coelho-selvagem.jpg",
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
