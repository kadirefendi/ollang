<template>
  <div class="app-bar flex flex-row space-x-1">
    <div class="basis-2/3">
      <label class="relative block">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          class="placeholder:normal placeholder:text-slate-400 block bg-white w-full rounded-full py-3 pl-12 pr-3 shadow-sm focus:outline-none focus:ring-[#00d37ba2] focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
      </label>
    </div>
    <div class="basis-1/3">
      <div class="flex flex-row justify-end items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mx-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <img
          :src="users.profiles[0].avatar"
          alt=""
          width="50"
          height="50"
          class="mx-2 rounded-xl"
        />
        {{ users.profiles[0].name }}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mx-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '../stores/users'
import { useRoute, useRouter } from 'vue-router'
const users = useStore()
</script>
