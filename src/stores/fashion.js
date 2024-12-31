import { defineStore } from 'pinia'

export const useFashionStore = defineStore('fashion', {
  state: () => ({
    collections: [],
    featuredItems: [],
    isLoading: false,
    error: null
  }),
  
  actions: {
    async fetchCollections() {
      this.isLoading = true
      try {
        // Simulation d'appel API
        const response = await fetch('/api/collections')
        this.collections = await response.json()
      } catch (error) {
        this.error = error.message
      } finally {
        this.isLoading = false
      }
    }
  }
})