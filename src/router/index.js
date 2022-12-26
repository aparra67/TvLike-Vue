import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  /** Ruta de Pagina Principal 'home' */
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  /** Ruta de Login o inicio de sesion 'login-view' */
  {
    path: '/login',
    name: 'login-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  /** Ruta de ver Perfil de un usuario */
  {
    path: '/user/:id',
    name: 'user-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserView.vue')
  },
  /** Ruta de Editar Perfil de un usuario */
  {
    path: '/edit-user/:id',
    name: 'edit-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditUserView.vue')
  },
  /** Ruta de Registrarse en el sitio web 'sign-view' */
  {
    path: '/sign',
    name: 'sign-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignView.vue')
  },
  /** Ruta para ir a la vista de todas las peliculas 'peliculas' */
  {
    path: '/peliculas/:page',
    name: 'peliculas',
    component: () => import(/* webpackChunkName: "about" */ '../views/PeliculasView.vue')
  },
  /** Ruta para ir a la vista de todas las peliculas de un genero 'peliculas-gen' */
  {
    path: '/peliculas/:gen/:page',
    name: 'peliculas-gen',
    component: () => import(/* webpackChunkName: "about" */ '../views/PeliculasGeneroView.vue')
  },
  /** Ruta para ir a la vista de los detalles de una pelicula 'movie' */
  {
    path: '/movie/:id',
    name: 'movie',
    component: () => import(/* webpackChunkName: "about" */ '../views/MovieView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
