<template>
  <div class="mt-6 w-full">
    <div class="flex flex-col items-center">
      <IconTrophy />
      <div class="mt-12">
        <span class="text-2xl">Upgrade to</span>
        <strong class="text-2xl ml-2">Pro</strong>
      </div>
      <span class="mt-4 text-center">
        {{ counter.profiles[0].summary }}
      </span>
    </div>
    <div class="mt-12">
      <div class="mb-2"><IconCheck /> Unlimited Job Post</div>
      <div class="mb-2"><IconCheck /> Multiple Job Communication</div>
      <div class="mb-2">
        <IconCheck /> Unlimited Calling Access from different city
      </div>
      <div class="mb-2"><IconCheck /> Hire 10+ freelancers for one project</div>
      <div class="mb-2">
        <IconCheck /> Filter, block, search talent freelancers
      </div>
    </div>

    <div class="flex justify-center mt-24">
      <button class="border rounded-full bg-sky-600 mr-3 px-6 py-3 text-white">
        <span class="font-medium"> Upgrade Plan</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import IconTrophy from './icons/IconTrophy.vue'
import { useCounterStore } from '../stores/counter'
import IconCheck from './icons/IconCheck.vue'
const counter = useCounterStore()
</script>
