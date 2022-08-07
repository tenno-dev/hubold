import { defineStore } from 'pinia'

export const useStore = defineStore('ssr', {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      platform: 'pc',
    }
  },
  persist: true,
})

export const usePostsStore = defineStore('warframes', {
  state: () => ({
    primes: [],
    nonprimes: [],
    warframes: [],
    loading: true,
  }),
  actions: {
    async getFrames() {
      this.loading = true
      const result = await fetch('https://fra.tenno.dev/warframes')
      const data = await result.json()
      console.log(data.length)
      for (let i = 0; i < data.length; i++) {
        if (
          data[i].name.includes('Prime') &&
          !data[i].name.includes('<ARCHWING>')
        ) {
          this.primes.push(data[i])
        }
        if (
          !data[i].name.includes('Prime') &&
          !data[i].name.includes('<ARCHWING>')
        ) {
          this.nonprimes.push(data[i])
        }
      }
      this.warframes = data
      this.loading = false
    },
  },
})
