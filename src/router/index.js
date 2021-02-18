import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    redirect:'/seleccionPermiso',
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
    meta:{requiresAuth:true},
    component: () => import('../views/ElegirPermiso.vue')
  },
  {
    path: '/seleccionModalidad/:id',
    name: 'seleccionModalidad',
    meta:{requiresAuth:true},
    component: () => import('../views/ElegirModalidad.vue')
  },
  {
    path: '/tests',
    name: 'tests',
    meta:{requiresAuth:true},
    component: () => import('../views/Tests.vue')
  },
  {
    path: '/resultadoTest',
    name: 'resultados',
    meta:{requiresAuth:true},
    component: () => import('../components/resultadoTest.vue')
  },
  {
    path: '/test/:id',
    name: 'test',
    meta:{requiresAuth:true},
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
router.beforeEach((to, from, next) => { 
  if (to.matched.some(record => record.meta.requiresAuth)) { 
      // this route requires auth, check if logged in 
      // if not, redirect to login page. 
      if (store.getters.getUserName == '') { 
          next({ 
              path: '/login', 
              query: { redirect: to.fullPath } 
          }) 
      } else { 
          next() 
      } 
  } else { 
      next() // make sure to always call next()! 
  } 
}) 
export default router
