import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore({
  id: 'users',
  state: () => ({
    profiles: [],
  }),
  getters: {
    //
  },
  actions: {
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
