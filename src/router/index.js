import { createRouter, createWebHistory } from 'vue-router'
import Users from '../views/Users.vue'

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: Users
  },
  {
    path: '/:username',
    name: 'UserDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "user-detail" */ '../views/UserDetail.vue')
  },
  {
    path: '/404',
    name: 'PageNotFound',
    component: () =>
      import(/* webpackChunkName: "notfound" */ '../views/PageNotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
