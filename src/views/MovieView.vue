<template>
    <div class="movie">
        <MenuTv/>
        <!-- Seccion de los Detalles de la Pelicula-->
        <section class="container">
                <div class="row g-4 position-relative shadow mb-5 card-container mt-5">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-md-0 p-md-4">
                        <img :src="imagen" class="w-100">
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-4 ps-md-0">
                        <h5 class="mt-0 fw-bold">{{ title }}</h5>
                        <div class="descripcion text-start">
                            <p class="mt-3">{{ description }}</p>
                            <br/>
                            <h6 class="d-inline fw-bold">Año:</h6>
                            <span>&nbsp;{{ year }}</span>
                            <h6 class="fw-bold">Genero:</h6>
                                <ol v-for="item in genero" :key="item">
                                    <li>{{ item }}</li>
                                </ol>
                            <div v-if="cast">
                                <h6 class="fw-bold">Reparto:</h6>
                                <ol v-for="actor in cast" :key="actor" class="flex">
                                    <li>
                                        <p>{{ actor.name }}</p>
                                        <span v-if="actor.character_name">
                                            <p class="ms-2">({{ actor.character_name }})</p>
                                        </span>
                                    </li>
                                </ol>
                            </div>
                            <div v-else>
                                <h6 class="d-inline fw-bold">Reparto:</h6>
                                <span> No hay información</span>
                            </div>
                            <h6 class="d-inline fw-bold">Raiting:</h6>
                            <span>&nbsp;{{ rating }}</span>
                        </div>
                    </div>
                </div>
        </section>
        <!-- Actores de la pelicula -->
        <div v-if="cast" class="container content p-3">
            <h5 class="fw-bold">Reparto Principal</h5>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 row-pelis">
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3" v-for="actor in cast" :key="actor">
                    <div class="p-3 mb-5 h-100">
                        <div v-if="!actor.url_small_image">
                            <img src="../../public/avatar-perfil-2.jpg" class="card-img-top mx-auto d-block img-peli">                       </div>
                        <div v-else>
                            <img :src="actor.url_small_image" class="card-img-top mx-auto d-block img-peli">
                        </div>
                        <div class="card-body">
                        <h5 class="card-title">{{ actor.name }}</h5>
                        </div>
                    </div>
                </div>
          </div>
        </div>
        <!-- Trailer de la pelicula -->
        <section class="container content p-3 mt-5">
            <h5 class="mt-2 fw-bold">Trailer de la pelicula.</h5>
            <div class="ratio ratio-16x9 mt-5">
                <div class="mx-auto">
                    <iframe :src="trailer" class="yt-trailer" title="YouTube video" allowfullscreen></iframe>
                </div>
            </div>
        </section>
        <!-- Seccion de Comentarios -->
        <section  v-if="user" class="container">
            <div class="row mt-5 shadow mb-5 card-container">
                <!-- contenido de comentarios -->
                <div class="d-flex position-relative">
                    <div>
                        <h5 class="mt-0 fw-bold">Area de Comentarios</h5>
                        <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
                    </div>
                </div>
            </div>
        </section>
        <div class="container sugges-content mt-5 p-3">
            <h5 class="mt-2 fw-bold">Lista de Sugerencias</h5>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3" v-for="item in list_movies" :key="item.id">
                    <div class="card shadow p-3 mb-5 h-100 card-container">
                        <a :href="showMovieDetails(item.id)">
                        <img :src="item.medium_cover_image" class="card-img-top img-thumbnail">
                        </a>
                        <h5 class="card-title mt-2">{{ item.title }}</h5>
                    </div>
                </div>
          </div>
        </div>
        <FooterTv/>
    </div>
</template>

<script>
import MenuTv from '@/components/MenuTv.vue'
import FooterTv from '@/components/FooterTv.vue'
const url = 'https://yts.mx/api/v2/'
const youtube = 'https://www.youtube.com/embed/'
const propYoutube = '?rel=0&wmode=transparent&border=0&autoplay=1&iv_load_policy=3'
export default {
  name: 'MovieView',
  components: { MenuTv, FooterTv },
  data () {
    return {
      user: this.$store.state.user,
      details_movie: null,
      list_movies: null,
      id: this.$route.params.id,
      imagen: '',
      title: '',
      cast: null,
      description: '',
      genero: null,
      year: '',
      rating: '',
      trailer: ''
    }
  },
  mounted () {
    this.axios.get(`${url}movie_details.json?movie_id=${this.id}&with_images=true&with_cast=true`).then((response) => {
      this.details_movie = response.data.data.movie
      this.imagen = this.details_movie.large_cover_image
      this.title = this.details_movie.title
      this.description = this.details_movie.description_full
      this.cast = this.details_movie.cast
      this.genero = this.details_movie.genres
      this.year = this.details_movie.year
      this.rating = this.details_movie.rating
      this.trailer = youtube.concat(this.details_movie.yt_trailer_code).concat(propYoutube)
    })
    this.axios.get(` ${url}movie_suggestions.json?movie_id=${this.id} `).then((response) => {
      this.list_movies = response.data.data.movies
    })
  },
  methods: {
    showMovieDetails (id) {
      return `/movie/${id}`
    }
  }
}
</script>

<style scoped>
    h5 h6 {
        color: #fffffe;
    }
    p{
        color: #a7a9be;
        display: inline-block;
    }
    .card-container {
        background: #464555dc;
        border-radius: 12px;
    }
    .card-container-cast {
        background: #464555dc;
        border-radius: 12px;
        height: 80% !important;
    }
    li {
        list-style: none;
    }
    .content {
    background: #464555dc;
    border-radius: 10px;
    height: 80% !important;
    }
    .sugges-content {
    background: #1b2557d9;
    border-radius: 10px;
    }
    .img-peli {
        border-radius: 120px;
        width: 50%;
        height: auto;
    }
    .yt-trailer{
        width: 70% !important;
        height: 70% !important;
        margin: 0 auto;
    }
</style>
