import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },

    {
      path: '/feeds',
      name: 'feeds',
      component: () => import('../views/FeedsView.vue'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: () => import('../views/JobsView.vue'),
    },
    {
      path: '/saved',
      name: 'saved',
      component: () => import('../views/SavedJobsView.vue'),
    },
    {
      path: '/proposal',
      name: 'proposal',
      component: () => import('../views/ProposalView.vue'),
    },
    {
      path: '/contracts',
      name: 'contracts',
      component: () => import('../views/ContractsView.vue'),
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserView,
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: () => import('../views/TransactionView.vue'),
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../views/ReportsView.vue'),
    },
  ],
})

export default router
