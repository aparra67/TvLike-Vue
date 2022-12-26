<template>
  <!-- Vista de la lista de peliculas por un genero especifico, en la cual se llama al componente 'MenuTv'-->
    <MenuTv/>
    <div class="peliculas">
      <div class="container-fluid mt-3">
        <!-- Los datos se cargan de forma dinamica a traves de las directivas de Vue.js -->
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3" v-for="peli in movies" :key="peli.id">
            <!-- <div v-for="peli in movies" :key="peli.id"> -->
              <div class="card shadow p-2 mb-5  h-100 card-container">
                <!-- El boton es Para ver los detalles de la pelicula-->
                <button type="link" @click="showMovieDetails(peli.id)">
                  <img :src="peli.medium_cover_image" class="card-img-top img-thumbnail img-peli"/>
                </button>
                <div class="card-body">
                  <h5 class="card-title">{{ peli.title }}</h5>
                </div>
                <!-- <div class="card-footer">
                  <a href="#" class="card-link" data-bs-toggle="tooltip" title="Tooltip on top">
                    <i class="bi bi-heart heart-i"></i>
                  </a>
                  <a href="#" class="card-link">
                    <i class="bi bi-card-text"></i>
                  </a>
                </div> -->
              </div>
          </div>
        </div>
        <!-- PAGINACION -->
        <div class="row row-col-12 mt-3">
          <nav aria-label="Page navigation example" class="mt-3">
            <ul class="pagination justify-content-center">
              <li class="page-item" @click="getPreviousPage()">
                <a class="page-link page-list" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li v-for="i in pages" :key="i" class="page-item" :v-show="rango" :class="isActive(i)">
                <!-- <a class="page-link page-list" :href="ruta(i)">{{ i }}</a> -->
                <a class="page-link page-list" :href="ruta(i)" v-show="i < rangoPage">{{ i }}</a>
                <!-- <div class="page-link page-list" @click="ruta(i)" v-show="i < rangoPage" style="color: white; cursor:pointer; font-weight: bold;">{{ i }}</div> -->
              </li>
              <li class="page-item" @click="getNextPage()">
                <a class="page-link page-list" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- Fin de la Paginacion-->
      </div>
    </div>
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
      genre: this.$route.params.gen,
      pageActual: this.$route.params.page,
      pages: 0,
      rangoPage: 20
    }
  },
  mounted () {
    // this.pageActual = this.$route.params.page
    console.log(this.$route.params)
    console.log(this.pageActual)
    this.axios.get(`${url}list_movies.json?sort_by=year&genre=${this.genre}&limit=${this.elementsPagina}&page=${this.pageActual}`).then((response) => {
      this.pageActual = this.pageActual = response.data.data.page_number
      this.movies = response.data.data.movies
      this.totalElements = response.data.data.movie_count
      this.totalPaginas()
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
    showMovieDetails (id) {
      this.$router.push(`/movie/${id}`)
    },

    cargarDataUser () {
      if (this.$store.state.user !== null) {
        this.user = this.$store.state.user
        this.cargarLocalStorage()
      }
    },

    cargarLocalStorage () {
      localStorage.setItem('user-data', JSON.stringify(this.user))
    },
    /* getDataPagina (pagina) {
      // const page = pagina + 1
      console.log('entre al getDataPagina')
      console.log('el valor de pagina entes dela consulta get es: ')
      console.log(pagina)
      this.movies = null
      this.pageActual = pagina
      this.axios.get(` ${url}list_movies.json?sort_by=year&genre=${this.genre}&limit=${this.elementsPagina}&page=${this.pageActual} `).then((response) => {
        this.movies = response.data.data.movies
        console.log(response.data.data)
      })
      this.$router.push(`/peliculas/${this.genre}/${this.pageActual}`)
    }, */

    /** Metodo para guardar el total de paginas que va a tener la Vista */
    totalPaginas () {
      this.pages = Math.ceil(this.totalElements / this.elementsPagina)
    },

    /** Metodo para ir a la pagina anterior */
    getPreviousPage () {
      if (this.pageActual > 1) {
        this.pageActual--
      }
      this.ruta(this.pageActual)
    },

    /** Metodo para ir a la pagina siguiente */
    getNextPage () {
      if (this.pageActual < this.pages) {
        this.pageActual++
      }
      this.ruta(this.pageActual)
    },
    isActive (pagina) {
      return pagina === this.pageActual ? 'active' : ''
    },

    /** Metodo para ir a la pagina 'page' */
    ruta (page) {
      return `/peliculas/${this.genre}/${page}`
      // this.$router.push(`/peliculas/${this.genre}/${page}`)
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
    background: #1b2557d9;
    border-radius: 10px;
  }
  .img-peli {
    width: 250px;
    height: auto;
  }
  .page-list {
    background: #1b2557d9;
    border: none;
  }

</style>
