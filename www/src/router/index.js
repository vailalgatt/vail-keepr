import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Keeps from '@/components/Keeps'
import Vaults from '@/components/Vaults'
import Vault from '@/components/Vault'

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
      path: '/vaults',
      name: 'Vaults',
      component: Vaults
    },
    {
      path: '/vaults/:id',
      name: 'Vault',
      component: Vault
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
    },
    {
      path: "*",
      redirect: "/"

    }
  ]
})
