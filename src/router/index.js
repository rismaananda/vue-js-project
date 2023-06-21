import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentView from '../views/Student/Vue.vue'
import StudentCreate from '../views/Student/Create.vue'
import StudentEdit from '../views/Student/Edit.vue'
import StudentDelete from '../views/Student/Delete.vue'

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: StudentView
    },
    {
      path: '/student/create',
      name: 'studentCreate',
      component: StudentCreate 
    },
    {
      path: '/student/:id/edit',
      name: 'studentEdit',
      component: StudentEdit
    },
    {
      path: '/student/:id/delete',
      name: 'studentDelete',
      component: StudentDelete
    },
   
  ]
})

export default router
