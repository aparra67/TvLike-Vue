<template>
  <!-- Vista de la lista de TODAS las peliculas, en la cual se llama al componente 'MenuTv'-->
    <MenuTv/>
    <!-- <div class="peliculas"> -->
      <div class="container-fluid mt-5">
        <!-- Los datos se cargan de forma dinamica a traves de las directivas de Vue.js -->
        <div class="row g-4">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3" v-for="peli in movies" :key="peli.id">
              <div class="card shadow p-2 mb-5 h-100 card-container">
                <!-- El boton es Para ver los detalles de la pelicula-->
                <button type="link" @click="showMovieDetails(peli.id)">
                  <img :src="peli.medium_cover_image" class="card-img-top img-thumbnail img-peli"/>
                </button>
                <div class="card-body card-body-link" @click="showMovieDetails(peli.id)">
                  <h5 class="card-title">{{ peli.title }}</h5>
                </div>
              </div>
          </div>
        </div>
        <!-- PAGINACION -->
        <div class="row">
          <nav aria-label="Page navigation example" class="mt-3">
            <ul class="pagination justify-content-center">
              <li class="page-item" @click="getPreviousPage()">
                <a class="page-link page-list prev" :href="prev" v-show="pageActual > 1" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li v-for="i in rangoPage" :key="i" class="page-item" :class="isActive(i)">
                <a class="page-link page-list" :href="ruta(i)" v-show="rangoPage">{{ i }}</a>
              </li>
              <li class="page-item" @click="getNextPage()">
                <a class="page-link page-list next" :href="next" v-show="pageActual < pages" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- Fin de la Paginacion-->
      </div>
    <!-- </div> -->
    <FooterTv/>
</template>
<script>
import MenuTv from '../components/MenuTv.vue'
import FooterTv from '../components/FooterTv.vue'
const url = 'https://yts.mx/api/v2/'
export default {
  name: 'PeliculasView',
  components: { MenuTv, FooterTv },
  data () {
    return {
      user: null,
      movies: null,
      elementsPagina: 20,
      totalElements: 0,
      pageActual: this.$route.params.page,
      pages: 0,
      maxPages: 7,
      rangoPage: [],
      prev: null,
      next: null
    }
  },
  mounted () {
    this.axios.get(` ${url}list_movies.json?sort_by=year&limit=${this.elementsPagina}&page=${this.pageActual}`).then((response) => {
      this.pageActual = this.pageActual = response.data.data.page_number
      this.movies = response.data.data.movies
      this.totalElements = response.data.data.movie_count
      this.totalPaginas()
      this.paginacion(this.pageActual)
    })
  },
  created () {
    if (localStorage.getItem('user-data') !== null) {
      this.user = JSON.parse(localStorage.getItem('user-data'))
    } else {
      this.cargarDataUser()
    }
  },
  methods: {

    cargarDataUser () {
      if (this.$store.state.user !== null) {
        this.user = this.$store.state.user
        this.cargarLocalStorage()
      }
    },
    cargarLocalStorage () {
      localStorage.setItem('user-data', JSON.stringify(this.user))
    },
    showMovieDetails (id) {
      this.$router.push(`/movie/${id}`)
    },

    /** Metodo para guardar el total de paginas que va a tener la Vista */
    totalPaginas () {
      this.pages = Math.ceil(this.totalElements / this.elementsPagina)
    },

    /** Metodo para ir a la pagina anterior */
    getPreviousPage () {
      if (this.pageActual > 1) {
        this.pageActual--
      }
      this.prev = this.ruta(this.pageActual)
    },

    /** Metodo para ir a la pagina siguiente */
    getNextPage () {
      if (this.pageActual < this.pages) {
        this.pageActual++
      }
      this.next = this.ruta(this.pageActual)
    },
    isActive (pagina) {
      return pagina === this.pageActual ? 'active' : ''
    },

    /** Metodo para obtener el rango de la paginacion */
    paginacion (page) {
      if ((page >= this.maxPages / 2) && (page <= this.pages)) {
        if (page === this.pages) {
          for (let i = page; i > (page - this.maxPages); i--) {
            this.rangoPage.unshift(i)
          }
        }
        if (page < this.pages) {
          console.log('page es menor que this.pages')
          for (let i = page; i > 0 && i >= (page - this.maxPages / 2); i--) {
            this.rangoPage.unshift(i)
          }
          for (let j = page + 1; j < (this.pages) && (j <= (page + this.maxPages / 2)); j++) {
            this.rangoPage.push(j)
          }
        }
      } else {
        console.log('page es igual a 1')
        for (let i = 0; i < this.maxPages; i++) {
          this.rangoPage.push(i + 1)
        }
      }
    },
    /** Metodo para ir a la pagina 'page' */
    ruta (page) {
      console.log('entre a rutas')
      return `/peliculas/${page}`
    }
  }
}
</script>

<style scoped>
  .heart-i {
    color: red;
    width: 50px !important;
    height: 50px !important;
  }
  .card-container {
    background: #464555dc;
    border-radius: 10px;
  }
  .card-body-link {
    cursor: pointer;
  }
  .page-list {
    background: #464555dc;
    color: white;
    border: 1px solid white;
    margin: 3px;
  }
  .prev {
    cursor: pointer;
  }
  .next {
    cursor: pointer;
  }
</style>
