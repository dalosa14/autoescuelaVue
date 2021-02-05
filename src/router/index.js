import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/login',
    alias:'/register',
    name: 'Auth',
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/seleccionPermiso',
    name: 'seleccionPermiso',
    component: () => import('../views/ElegirPermiso.vue')
  },
  {
    path: '/seleccionModalidad/:id',
    name: 'seleccionModalidad',
    component: () => import('../views/ElegirModalidad.vue')
  },
  {
    path: '/tests',
    name: 'seleccionModalidad',
    component: () => import('../views/Tests.vue')
  },
  {
    path: '/test/:id',
    name: 'seleccionModalidad',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/*',
    name: 'Error',
    component: () => import('../views/Error.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
