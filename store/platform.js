import { defineStore } from 'pinia'

export const useStore = defineStore('ssr', {
    state: () => {
        return {
          // all these properties will have their type inferred automatically
          platform: 'pc'
        }
      },
  persist: true
})