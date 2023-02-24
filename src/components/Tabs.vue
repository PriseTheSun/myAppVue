<template>
  <v-card>
    <v-tabs
      v-model="tab"
      color="deep-purple-accent-4"
      align-tabs="center"
    >
      <v-tab :value="1">Gatos</v-tab>
      <v-tab :value="2">Cachorros</v-tab>
      <v-tab :value="3">Coelhos</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item
        v-for="n in 3"
        :key="n"
        :value="n"
      >
        <v-container fluid>
          <v-row>
            <v-col
              v-for="(image, index) in images[n-1]"
              :key="index"
              cols="12"
              md="4"
            >
              <v-img
                :src="image"
                :lazy-src="`https://picsum.photos/10/6?image=${index}`"
                aspect-ratio="1"
                height="400"
              ></v-img>
              
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
          "https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://picsum.photos/500/300?image=25",
          "https://picsum.photos/500/300?image=30",
          "https://picsum.photos/500/300?image=35",
          "https://picsum.photos/500/300?image=40"
        ],
        [
          "https://imgs.search.brave.com/TCenV15AAdyf8ahXSUXxSwfQUKnRWiVX1vwCqEZwfIg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9waXh5/Lm9yZy9zcmMvMC8x/MDQ5LmpwZw",
          "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/1739125/pexels-photo-1739125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://imgs.search.brave.com/LjtWbjh8qFx1440U9KAHAR-kloEzT3h6vFgCGNgOrjE/rs:fit:1200:1200:1/g:ce/aHR0cDovL3Bicy50/d2ltZy5jb20vbWVk/aWEvQ2FZb0RBZ1hF/QUl1X0Z5LmpwZzps/YXJnZQ",
          "https://images.pexels.com/photos/776373/pexels-photo-776373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5958289/pexels-photo-5958289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ],
        [
          "https://picsum.photos/500/300?image=75",
          "https://picsum.photos/500/300?image=80",
          "https://picsum.photos/500/300?image=85",
          "https://picsum.photos/500/300?image=90",
          "https://picsum.photos/500/300?image=95",
          "https://picsum.photos/500/300?image=100"
        ]
      ]
    };
  }
};
</script>

