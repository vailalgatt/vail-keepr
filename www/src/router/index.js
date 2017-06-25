import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Keeps from '@/components/Keeps'
import Vaults from '@/components/Vaults'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/keeps',
      name: 'Keeps',
      component: Keeps
    },
    {
      path: '/keeps/:id',
      name: 'Vaults',
      component: Vaults
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
