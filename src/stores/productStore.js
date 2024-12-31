import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        image: 'https://www.unesco.org/sites/default/files/styles/paragraph_medium_desktop/article/2023-10/610x452visuel%20cov.jpg?itok=kgBMgu7D',
        price: '400$',
        description: 'Brown Coat Collection'
      },
      {
        id: 2,
        image: 'https://media.vogue.de/photos/5cf544662edfe427b9dee124/2:3/w_2560%2Cc_limit/GettyImages-470030052.jpg',
        price: '400$',
        description: 'Brown Coat Collection'
      },
      {
        id: 3,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/E1266838_%285398329491%29.jpg/220px-E1266838_%285398329491%29.jpg',
        price: '400$',
        description: 'Brown Coat Collection'
      },
      {
        id: 4,
        image: 'https://archzine.fr/wp-content/uploads/2019/02/mode-homme-chemise-motifs-colores-capeline-pantalon-blanc.webp',
        price: '400$',
        description: 'Brown Coat Collection'
      },
      {
        id: 5,
        image: 'https://s.francaisfacile.rfi.fr/media/display/588cdaba-e43e-11ed-b8b9-005056bf30b7/w:1280/p:1x1/iStock-1224672215.jpg',
        price: '400$',
        description: 'Brown Coat Collection'
      },
      {
        id: 6,
        image: 'https://modart-paris.com/images/%C2%A9Saint-Ambroise2024CAM1-200-scaled.jpg',
        price: '400$',
        description: 'Brown Coat Collection'
      },
      // ... autres produits
    ]
  }),
  
  actions: {
    async fetchProducts() {
      // Simulation d'un appel API
      return this.products
    }
  }
})