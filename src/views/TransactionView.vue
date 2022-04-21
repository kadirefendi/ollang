<template>
  <div class="bg-slate-50 min-h-screen p-12">
    <ProfileAppBar />
    <div class="flex flex-row">
      <div class="basis-2/3">
        <ProfileUser />
        <ProfileExperience />
        <ProfileTabs />
      </div>
      <div id="banner" class="basis-1/3 bg-white px-6 mt-8">
        <Banner />
      </div>
    </div>
    <div class="flex flex-row">
      <div class="basis-2/3"></div>
    </div>
  </div>
</template>

<script setup>
import ProfileAppBar from '@/components/ProfileAppBar.vue'
import ProfileUser from '@/components/ProfileUser.vue'
import { useStore } from '../stores/users'
import { ref } from 'vue'
import Banner from '../components/Banner.vue'
import ProfileExperience from '../components/ProfileExperience.vue'
import ProfileTabs from '../components/ProfileTabs.vue'

const users = useStore()

console.log(users.profiles[0])

console.log(users.profiles)
</script>

<style scoped>
.avatar {
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
