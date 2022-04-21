import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
    profiles: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++
    },
    getProfiles() {
      axios
        .get('https://6255745f52d8738c6922364f.mockapi.io/users')
        .then((res) => {
          this.profiles = res.data
          console.log(res.data)
        })
    },
  },
})
