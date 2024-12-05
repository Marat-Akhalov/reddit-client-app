import { useArticlesStore } from '@/store/articles'
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
      redirect: { name: 'r-error' },
      children: [
        {
          path: ':branchName',
          name: 'r-branch',
          component: () => import('@/views/BranchView.vue'),
          props: true,
          beforeEnter: async (to, _, next) => {
            const { branchName } = to.params

            const articlesStore = useArticlesStore()

            try {
              await articlesStore.getArticles(branchName)

              if (articlesStore.isBranchValid) {
                next()
              } else {
                next({ name: 'r-error' })
              }
            } catch (err) {
              console.log(err)
              next({ name: 'r-error' })
            }
          },
        },
        {
          path: '/r/error',
          name: 'r-error',
          component: () => import('@/views/BranchNotFound.vue'),
        },
      ],
    },
  ],
})

export default router
