<template>
  <header class="">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="shadow-md min-h-screen">
      <!-- <HelloWorld msg="You did it!" /> -->
      <RouterLink class="p-3" to="/">
        <OllangLogo class="px-8 pt-16" />
      </RouterLink>
      <nav class="flex flex-col pl-6">
        <RouterLink class="p-3" to="/feeds">
          <IconJob class="mr-3" />
          My Job Feed</RouterLink
        >

        <RouterLink class="p-3" to="/jobs">
          <IconJobs class="mr-3" />
          Discover Jobs</RouterLink
        >
        <RouterLink class="p-3" to="/saved">
          <IconSaved class="mr-3" />
          Saved Jobs</RouterLink
        >
        <RouterLink class="p-3" to="/proposal">
          <IconProposal class="mr-3" />
          Proposal</RouterLink
        >
        <RouterLink class="p-3" to="/contracts">
          <IconProposal class="mr-3" />
          Contracts</RouterLink
        >
        <RouterLink class="p-3" to="/user/:id">
          <IconProposal class="mr-3" />
          Profile</RouterLink
        >
        <RouterLink class="p-3" to="/transaction">
          <IconProposal class="mr-3" />
          Transaction</RouterLink
        >
        <RouterLink class="p-3" to="/reports">
          <IconProposal class="mr-3" />
          Reports</RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import OllangLogo from './components/icons/OllangLogo.vue'
import IconJob from './components/icons/IconJob.vue'
import IconJobs from './components/icons/IconJobs.vue'
import SavedJobsView from './views/SavedJobsView.vue'
import IconSaved from './components/icons/IconSaved.vue'
import IconProposal from './components/icons/IconProposal.vue'
// import HelloWorld from '@/components/HelloWorld.vue'
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
const users = counter.getProfiles()
counter.getProfiles()
</script>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

a,
.green {
  text-decoration: none;

  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: #00d37ba2;
    color: white;
  }
}

nav {
  font-size: 12px;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  /* color: var(--color-text); */
  color: #334155;
  font-weight: bold;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  color: #3b4957;
}

nav a {
  display: flex;
  color: #64748b;
  font-size: 16px;
  /* padding: 0 1rem; */
  /* border-left: 1px solid var(--color-border); */
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  /* body {
    display: flex;
    place-items: center;
  } */

  #app {
    display: grid;
    grid-template-columns: 1fr 5fr;
    padding: 0 2rem;
  }

  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
