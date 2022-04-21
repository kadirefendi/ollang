<template>
  <div class="basis-2/3">
    <div id="leftside" class="grid grid-cols-12 gap-4 mt-10">
      <div id="avatar" class="col-span-2 row-span-2">
        <img
          :src="users.profiles[0].avatar"
          alt=""
          width="150"
          height="150"
          class="avatar"
        />
      </div>
      <div id="profilename" class="flex flex-col col-span-5 ml-6">
        <span class="text-xl font-semibold"> {{ users.profiles[0].name }}</span>
        <div class="flex flex-row mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span> {{ users.profiles[0].country }} </span>
        </div>
      </div>
      <div class="flex col-span-5">
        <div>
          <button
            class="border rounded-full bg-sky-600 mr-3 px-4 py-1 text-white"
          >
            Edit Profile
          </button>
          <button class="border rounded-full px-4 py-1">Public View</button>
        </div>
      </div>
      <div class="col-span-8 row-span-1 ml-6">
        {{ users.profiles[0].summary }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '../stores/users'
const users = useStore()
</script>

<style>
.avatar {
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
