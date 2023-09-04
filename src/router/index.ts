import { createRouter, createWebHistory } from 'vue-router'

import HomeView       from  '@/client/views/HomeView.vue'
import AboutView      from  '@/client/views/AboutView.vue'

import AdminHomeView  from  '@/admin/views/AdminHomeView.vue'
import AdminAboutView from  '@/admin/views/AdminAboutView.vue'
import AdminLoginView from  '@/admin/views/AdminLoginView.vue'
import AdminLayout    from  '@/layouts/admin_layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => AboutView
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => AdminLayout,
      children: [
        {
          path: '', // admin base route /admin
          name: 'admin-home',
          components:{
            mainContent: () => AdminHomeView
          }
        },
        {
          path: 'about',
          name: 'admin-about',
          components:{
            mainContent: () => AdminAboutView
          }
        },
        {
          path: 'login',
          name: 'admin-login',
          component: AdminLoginView
        }
      ]
    },
   
  ]
})

export default router
