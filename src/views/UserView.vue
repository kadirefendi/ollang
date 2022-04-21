<template>
  <div class="bg-slate-50 min-h-screen">
    <p>{{ $route.params.id }}</p>
    <p>{{ $route.params.name }}</p>
    <ul>
      <li v-for="user in users" :key="id">{{ user.id }} {{ user.name }}</li>
    </ul>
    <router-link :to="`${user.id}`"></router-link>
  </div>
</template>

<script setup>
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue'

const counter = useCounterStore()
const users = counter.getProfiles()

console.log(users)

const router = useRouter()
const route = useRoute()

// const pushRouter = () => {
//   ids.value
// }

// pushRouter()

// console.log(route.params)
</script>
