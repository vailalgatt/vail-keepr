import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'https://vail-keepr.herokuapp.com/api/',
  timeout: 2000,
  withCredentials: true
})
let auth = axios.create({
  baseURL: 'https://vail-keepr.herokuapp.com/api/',
  timeout: 2000,
  withCredentials: true
})

// REGISTER ALL DATA HERE
let state = {
  user: {},
  myVaults: {},
  myKeeps: {},
  activeVault: {},
  activeKeep: {},
  removeKeep: {},
  // searchResults: [],
  // searchedTerm: '',
  error: {},
  vaults: [],
  //Dummy Data
  keeps: [],
}

let handleError = (state, err) => {
  state.error = err
}

export default new Vuex.Store({
  // ALL DATA LIVES IN THE STATE
  state,
  // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
  mutations: {
    setKeeps(state, keeps) {
      state.keeps = keeps
    },
    setActiveKeeps(state, activeKeeps) {
      state.activeKeeps = activeKeeps
    },
    setVaults(state, vaults) {
      state.vaults = vaults
    },
    setActiveVaults(state, activeVaults) {
      state.activeVaults = activeVaults
    },
    user(state, user) {
      state.user = user
    }
  },

  actions: {
    getVaults({ commit, dispatch }) {
      api('uservaults')
        .then(res => {
          commit('setVaults', res.data.data)
        })
        .catch(handleError)
    },
    getVault({ commit, dispatch }, vaultId) {
      api('vaults/' + vaultId)
        .then(res => {
          commit('setActiveVaults', res.data.data)
        })
        .catch(handleError)
    },
    createVault({ commit, dispatch }, vault) {
      api.post('vaults/', vault)
        .then(res => {
          dispatch('getVaults')
        .then(res => {
          commit('setVaults', res.data.data)
        })
        })
        .catch(handleError)
    },
    getKeeps({ commit, dispatch }) {
      api('userkeeps')
        .then(res => {
          commit('setKeeps', res.data.data)
        })
        .catch(handleError)
    },
    removeKeep({ commit, dispatch }, keep) {
      api.delete('vault/' + keep._id)
        .then(res => {
          dispatch('removeKeep')
        })
        .catch(handleError)
    },
    getAllKeeps({ commit, dispatch }) {
      api('keeps')
        .then(res => {
          commit('setKeeps', res.data.data)
        })
    },
    createKeep({ commit, dispatch }, keep) {
      api.post('keeps/', keep)
        .then(res => {
          dispatch('getKeeps')
            .then(res => {
              commit('setKeeps', res.data.data)
            })
        })
        .catch(handleError)
    },
    login({ commit, dispatch }, user) {
      auth.post('login', user)
        .then(res => {
          console.log(res)
          if (res.data.error) {
          }
          commit('user', res.data.data)
          router.push('/vaults')
        })
        .catch(handleError)
    },
    register({ commit, dispatch }, user) {
      auth.post('register', user)
        .then(res => {
          console.log(res)
          if (res.data.error) {
            return handleError(res.data.error)
          }
          //LETS REDIRECT THE PAGE
          state.user = res.data//commit
          router.push('/keeps')
        })
        .catch(handleError)
    },
    getAuth() {
      auth('authenticate')
        .then(res => {
          if (!res.data.data) {
            return router.push('/login')
          }
          state.user = res.data.data
          router.push('/keeps')
        }).catch(err => {
          router.push('/login')
        })
    },
    logout({ commit, dispatch }, user) {
      auth.delete('logout', user)
        .then(res => {
          router.push('/')
        }).catch(handleError)
    },
    clearError() {
      state.error = {}
    }
  }
})
