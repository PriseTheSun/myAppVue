<template>
  <v-card class="mt-8" elevation="0">
    <v-dialog v-model="dialog" max-width="900" class="align-center justify-center">
      <v-card v-if="dialogImage" class="rounded-xl overflow-hidden">
        <v-row no-gutters>
          <v-col cols="12" md="5">
            <v-img
              :src="dialogImage"
              height="100%"
              min-height="350"
              cover
              class="modal-img"
            >
              <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height">
                  <v-progress-circular indeterminate color="brown" />
                </div>
              </template>
              <div class="img-overlay d-flex align-center justify-center">
                <v-chip color="white" variant="flat" size="large" class="px-4">
                  <Heart :size="18" class="mr-2 text-error" />
                  Disponível para Adoção
                </v-chip>
              </div>
            </v-img>
          </v-col>
          
          <v-col cols="12" md="7">
            <v-card-title class="d-flex align-center justify-space-between pa-6 pb-0">
              <div>
                <v-chip size="small" color="brown-lighten-4" class="mb-2">
                  <component :is="currentPetIcon" :size="14" class="mr-1" />
                  {{ currentPetCategory }}
                </v-chip>
                <div class="text-h5 font-weight-bold">{{ dialogTitle }}</div>
              </div>
              <v-btn icon variant="text" @click="dialog = false">
                <X :size="24" />
              </v-btn>
            </v-card-title>
            
            <v-card-text class="pa-6 pt-4">
              <p class="text-body-1 text-grey-darken-1 mb-6">{{ dialogDescription }}</p>
              
              <v-divider class="mb-6" />
              
              <div class="d-flex flex-wrap gap-3 mb-6">
                <v-chip variant="outlined" color="brown" prepend-icon="shield-check">
                  Vacinado
                </v-chip>
                <v-chip variant="outlined" color="brown" prepend-icon="activity">
                  Saudável
                </v-chip>
                <v-chip variant="outlined" color="brown" prepend-icon="home">
                  Microchip
                </v-chip>
              </div>
              
              <v-btn
                color="success"
                size="large"
                block
                :href="`https://api.whatsapp.com/send?phone=5511914810122&text=Olá! Tenho interesse no pet: ${dialogTitle}`"
                target="_blank"
                class="mb-4"
              >
                <MessageCircle :size="20" class="mr-2" />
                Quero Adotar via WhatsApp
              </v-btn>
              
              <div class="d-flex align-center justify-space-between">
                <span class="text-caption text-grey">Compartilhe com amigos</span>
                <shere-btn />
              </div>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>

    <v-container>
      <div class="text-center mb-6">
        <h2 class="text-h3 font-weight-bold mb-2">Nossos Amigos</h2>
        <p class="text-body-1 text-medium-emphasis">Escolha seu companheiro de vida</p>
      </div>

      <v-tabs v-model="tab" color="brown-darken-1" align-tabs="center" class="mb-6">
        <v-tab :value="1">
          <Cat :size="20" class="mr-2" />
          Gatos
        </v-tab>
        <v-tab :value="2">
          <Dog :size="20" class="mr-2" />
          Cachorros
        </v-tab>
        <v-tab :value="3">
          <Rabbit :size="20" class="mr-2" />
          Coelhos
        </v-tab>
      </v-tabs>
    </v-container>

    <v-window v-model="tab">
      <v-window-item v-for="n in 3" :key="n" :value="n">
        <v-container>
          <v-row v-if="loading">
            <v-col v-for="i in 6" :key="i" cols="12" sm="6" md="4">
              <v-skeleton-loader type="card" />
            </v-col>
          </v-row>
          <v-row v-else>
            <v-col
              v-for="(image, index) in images[n - 1]"
              :key="index"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card class="pet-card" hover @click="openDialog(image, n - 1)">
                <v-img
                  :src="image.src"
                  aspect-ratio="1.2"
                  cover
                  class="pet-image"
                >
                  <div class="pet-overlay">
                    <Heart :size="32" class="text-white" />
                  </div>
                </v-img>
                <v-card-text class="text-center pt-4">
                  <h3 class="text-h6 font-weight-medium">{{ image.title }}</h3>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
import { Cat, Dog, Rabbit, Heart, X, ShieldCheck, Activity, Home, MessageCircle } from 'lucide-vue-next'
import ShereBtn from '@/components/ShereBtn.vue'

export default {
  name: 'TabsComponent',
  components: {
    ShereBtn,
    Cat,
    Dog,
    Rabbit,
    Heart,
    X,
    ShieldCheck,
    Activity,
    Home,
    MessageCircle,
  },
  data() {
    return {
      tab: 1,
      images: [[], [], []],
      loading: true,
      dialog: false,
      dialogImage: '',
      dialogTitle: '',
      dialogDescription: '',
      catImages: [
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=500&h=500&fit=crop',
      ],
      dogImages: [],
      bunnyImages: [
        'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1452857251661-2464b77dfb99?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1535241749838-299c4db2ec42?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1591382386627-349b692688ff?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1452857251661-2464b77dfb99?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1535241749838-299c4db2ec42?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1591382386627-349b692688ff?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=500&h=500&fit=crop',
      ],
      petNames: {
        cats: ['Luna', 'Milo', 'Oliver', 'Bella', 'Simba', 'Nala', 'Charlie', 'Cleo', 'Max', 'Felix', 'Mimi', 'Amora'],
        dogs: ['Thor', 'Belinha', 'Rex', 'Paçoca', 'Duke', 'Amora', 'Toby', 'Pipoca', 'Bruce', 'Mel', 'Spike', 'Bilu'],
        rabbits: ['Pipoca', 'Nuvem', 'Alfajor', 'Bolinha', 'Cenoura', 'Orelhudo', 'Neve', 'Pepita', 'Cacimba', 'Floquinho', 'Tambor', 'Pé-de-pena'],
      },
      catDescriptions: [
        'Companheira silenciosa com olhos que dizem mais que palavras. Apreciadora de sol da tarde e sonecas longas.',
        'Brincalhona e curiosa, adora caixas e sacolas. Seu ronronar é a trilha sonora perfeita para momentos de paz.',
        'Elegancia em cada movimento. Olhos penetrantes que hipnotizam e uma pelagem que é pura arte.',
        'Pequena gigante do carinho. Ama colo, cocegas e fazer companhia enquanto você lê ou assiste TV.',
        'Maliciosa e inteligente, sempre encontrando lugares inesperados para dormir. Reina do lar com charme.',
        'Dócil e amorosa, uma verdadeira bolinha de pelos que só quer dar e receber amor.',
        'Companheira silenciosa com olhos que dizem mais que palavras. Apreciadora de sol da tarde e sonecas longas.',
        'Brincalhona e curiosa, adora caixas e sacolas. Seu ronronar é a trilha sonora perfeita para momentos de paz.',
        'Elegancia em cada movimento. Olhos penetrantes que hipnotizam e uma pelagem que é pura arte.',
        'Pequena gigante do carinho. Ama colo, cocegas e fazer companhia enquanto você lê ou assiste TV.',
        'Maliciosa e inteligente, sempre encontrando lugares inesperados para dormir. Reina do lar com charme.',
        'Dócil e amorosa, uma verdadeira bolinha de pelos que só quer dar e receber amor.',
      ],
      dogDescriptions: [
        'Fiel companheiro cheio de energia! Adora caminhadas, brincadeiras e ser o melhor amigo que você já teve.',
        'Carinhosa e protetora. Sua lealdade é inabalável e seu amor por você será infinito.',
        'Brincalhão por natureza, adora correr e explorar. Sempre pronto para a próxima aventura.',
        'Pequeno mas com um coração gigante. Adora colo tanto quanto adora brincar no parque.',
        'Nobre e imponente, mas com o coração mais manso que existe. Leve um amigo para a vida toda.',
        'Dócil e amorosa, uma verdadeira companheira. Sempre feliz em te ver, não importa o que.',
        'Fiel companheiro cheio de energia! Adora caminhadas, brincadeiras e ser o melhor amigo que você já teve.',
        'Carinhosa e protetora. Sua lealdade é inabalável e seu amor por você será infinito.',
        'Brincalhão por natureza, adora correr e explorar. Sempre pronto para a próxima aventura.',
        'Pequeno mas com um coração gigante. Adora colo tanto quanto adora brincar no parque.',
        'Nobre e imponente, mas com o coração mais manso que existe. Leve um amigo para a vida toda.',
        'Dócil e amorosa, uma verdadeira companheira. Sempre feliz em te ver, não importa o que.',
      ],
      rabbitDescriptions: [
        'Suave e peludo, adora pular e explorar. Seu nariginho sempre estará te explorando.',
        'Fofura em forma de coelho! Ama cenoura, feno fresco e muitos carinhozinhos.',
        'Brincalhão e curioso, adora fazer os humanos rir com suas travessuras.',
        'Calmo e carinhoso, perfeito para quem busca um companheiro tranquilo e amoroso.',
        'Pequeno grande amor. Adora ser segurado e fazer cócegas com seu nariz fofinho.',
        'Saltitante e feliz! Sempre pronto para uma nova aventura pelo jardim ou pela casa.',
        'Suave e peludo, adora pular e explorar. Seu nariginho sempre estará te explorando.',
        'Fofura em forma de coelho! Ama cenoura, feno fresco e muitos carinhozinhos.',
        'Brincalhão e curioso, adora fazer os humanos rir com suas travessuras.',
        'Calmo e carinhoso, perfeito para quem busca um companheiro tranquilo e amoroso.',
        'Pequeno grande amor. Adora ser segurado e fazer cócegas com seu nariz fofinho.',
        'Saltitante e feliz! Sempre pronto para uma nova aventura pelo jardim ou pela casa.',
      ],
    }
  },
  watch: {
    tab(newTab) {
      this.loadImages(newTab - 1)
    },
  },
  mounted() {
    this.loadImages(0)
  },
  methods: {
    loadImages(index) {
      if (this.images[index].length > 0) return
      
      this.loading = true
      
      setTimeout(() => {
        if (index === 0) {
          this.images[0] = this.catImages.map((src, i) => ({
            src,
            title: `Olá sou: ${this.petNames.cats[i]}`,
            description: this.catDescriptions[i],
          }))
        } else if (index === 1) {
          if (this.dogImages.length === 0) {
            this.fetchDogs(index)
          } else {
            this.images[1] = this.dogImages
            this.loading = false
          }
        } else {
          this.images[2] = this.bunnyImages.map((src, i) => ({
            src,
            title: `Olá, sou: ${this.petNames.rabbits[i]}`,
            description: this.rabbitDescriptions[i],
          }))
          this.loading = false
        }
      }, 300)
    },
    async fetchDogs() {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random/12')
        const data = await response.json()
        if (data.status === 'success') {
          this.dogImages = data.message.map((url, i) => ({
            src: url,
            title: `Olá sou: ${this.petNames.dogs[i]}`,
            description: this.dogDescriptions[i],
          }))
          this.images[1] = this.dogImages
        }
      } catch (error) {
        console.error('Error fetching dogs:', error)
        this.images[1] = []
      } finally {
        this.loading = false
      }
    },
    openDialog(image, tabIndex) {
      this.dialog = true
      this.dialogImage = image.src
      this.dialogTitle = image.title
      this.dialogDescription = image.description
      if (tabIndex !== undefined) {
        this.tab = tabIndex + 1
      }
    },
  },
  computed: {
    currentPetIcon() {
      const icons = [Cat, Dog, Rabbit]
      return icons[this.tab - 1] || Cat
    },
    currentPetCategory() {
      const categories = ['Gato', 'Cachorro', 'Coelho']
      return categories[this.tab - 1] || 'Pet'
    },
  },
}
</script>

<style scoped>
.pet-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  cursor: pointer;
}

.pet-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
}

.pet-image {
  position: relative;
  overflow: hidden;
}

.pet-overlay {
  position: absolute;
  inset: 0;
  background: rgba(109, 76, 65, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.pet-card:hover .pet-overlay {
  opacity: 1;
}

.modal-img {
  position: relative;
}

.img-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  padding: 40px 16px 16px;
}

.gap-3 {
  gap: 12px;
}
</style>
