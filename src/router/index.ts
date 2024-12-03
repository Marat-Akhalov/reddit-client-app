import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/r',
      name: 'r',
      children: [
        {
          path: '/r/:branchName',
          name: 'r-branch',
          component: () => import('@/views/BranchView.vue'),
          props: true,
        },
      ],
    },
  ],
})

export default router
