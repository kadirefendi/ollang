<template>
  <div id="tabs" class="flex mt-12">
    <span class="p-4 mb-4 border-b-4 cursor-pointer hover:text-green-600 focus:"
      >Experience</span
    >
    <span class="p-4 mb-4 border-b-4 cursor-pointer hover:text-green-600"
      >Biography</span
    >
    <span class="p-4 mb-4 border-b-4 cursor-pointer hover:text-green-600"
      >Skills</span
    >
    <span class="p-4 mb-4 border-b-4 cursor-pointer hover:text-green-600"
      >Portfolio</span
    >
  </div>
  <div class="pb-2 p-12 bg-white w-11/12 pr-12 mr-12">
    <div class="flex flex-row pb-6 items-center justify-between">
      <div class="inline">
        <span class="text-lg font-semibold mr-2">Job Experience</span>
        <span>3 Job History</span>
      </div>
      <div class="inline">
        <div class="border rounded-full px-3 py-2 inline-block cursor-pointer">
          <IconPlus />
          <span class="ml-2">Add More</span>
        </div>
      </div>
    </div>
    <div>
      <ProfileTab />
    </div>
  </div>
</template>

<script setup>
import IconPlus from './icons/IconPlus.vue'
import ProfileTab from './ProfileTab.vue'
</script>
