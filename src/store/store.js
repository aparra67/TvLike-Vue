import { createApp } from 'vue'
import Vuex from 'vuex'
import App from '../App.vue'
import axios from 'axios'

const app = createApp(App)
app.use(Vuex)
const authUrl = 'https://moviesback2022.herokuapp.com/'
export default new Vuex.Store({
  state () {
    return {
      user: null,
      token: null,
      sessionSuccess: false,
      mensaje: ''
    }
  },
  mutations: {
    auth_success (state, resp) {
      state.user = resp.userData
      state.sessionSuccess = true
      state.token = resp.token_access
      state.mensaje = 'Usuario autorizado'
    },
    update_user (state, resp) {
      console.log('Editando usuario....')
      state.user = resp.userData
      state.sessionSuccess = true
      state.token = resp.token_access
      state.mensaje = 'Usuario cargado'
    },
    logout (state) {
      state.user = null
      state.token = null
      state.sessionSuccess = false
    },
    Error (state, message) {
      state.mensaje = message
    }
  },
  actions: {
    login ({ commit }, user) {
      // console.log('Entre al store -> login ')
      return new Promise((resolve, reject) => {
        axios.post(`${authUrl}api/login`, user, { headers: { 'Content-Type': 'application/json;charset=UTF-8', Accept: 'aplication/json' } }).then((resp) => {
          // console.log('aca la respuesta', resp)
          const token = resp.data.message.access_token
          if (resp.data.code === 200) {
            axios.get(`${authUrl}api/me`, { headers: { Authorization: 'Bearer ' + `${token}` } }).then((response) => {
              // console.log('datos del usuario logeado:', response)
              commit('auth_success', { userData: response.data.message.user, token_access: token })
            })
          }
          resolve(resp)
        })
          .catch((err) => {
            // console.log(err)
            commit('Error', 'Imposible conectar con el servidor en este momento, intente más tarde.')
            reject(err)
          })
      })
    },
    register ({ commit }, user) {
      // console.log('Entre al store -> register ')
      return new Promise((resolve, reject) => {
        axios.post(`${authUrl}api/register`, user, { headers: { 'Content-Type': 'application/json;charset=UTF-8', Accept: 'aplication/json' } }).then((resp) => {
          // console.log('aca la respuesta', resp)
          const token = resp.data.message.access_token
          if (resp.data.code === 200) {
            axios.get(`${authUrl}api/me`, { headers: { Authorization: 'Bearer ' + `${token}` } }).then((response) => {
              // console.log('datos del usuario Registrado:', response)
              commit('auth_success', { userData: response.data.message.user, token_access: token })
            })
          }
          resolve(resp)
        }).catch((err) => {
          // console.log(err)
          reject(err)
        })
      })
    },
    editUser ({ commit }, user, id) {
      console.log('Entre al store -> editUser ')
      return new Promise((resolve, reject) => {
        axios.patch(`${authUrl}api/users/${id}`, user, { headers: { 'Content-Type': 'application/json;charset=UTF-8', Accept: 'aplication/json' } }).then((resp) => {
          console.log('aca la respuesta', resp)
          const token = resp.data.message.access_token
          if (resp.data.code === 200) {
            axios.get(`${authUrl}api/me`, { headers: { Authorization: 'Bearer ' + `${token}` } }).then((response) => {
              console.log('datos del usuario Editado:', response)
              commit('update_user', { userData: response.data.message.user, token_access: token })
            })
          }
          resolve(resp)
        }).catch((err) => {
          // console.log(err)
          reject(err)
        })
      })
    },
    logout_session ({ commit }, token) {
      console.log('ENTRE AL store-logout')
      return new Promise((resolve) => {
        axios.post(`${authUrl}api/logout`, { headers: { Authorization: 'Bearer ' + `${token}` } }).then((resp) => {
          commit('logout')
          console.log('SE HA CERRADO LA SESION CORRECTAMENTE')
          resolve(resp)
        })
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    getUser: state => state.user
  }
})
