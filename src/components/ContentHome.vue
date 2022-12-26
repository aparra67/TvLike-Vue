<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
        <div class="row-content p-3">
          <div class="d-flex justify-content-between align-items-center mt-3">
            <strong class="d-inline">Peliculas Recientes</strong>
            <!-- boton para ir a la Vista de todas las peliculas recientes -->
            <button type="button" class="btn btn-mas shadow mb-3 rounded" @click="listPeliReciente">Ver más</button>
            <!-------------------------------------------------------------->
          </div>
          <!-------------- Diseño para mostrar 12 peliculas recientes en el contenedor principal-------->
          <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 row-pelis">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3" v-for="item in list_movies" :key="item.id">
              <div class="card shadow p-3 mb-5 h-100 card-container">
                <button type="link" @click="showMovieDetails(item.id)">
                  <img :src="item.medium_cover_image" class="card-img-top img-thumbnail img-peli">
                </button>
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                </div>
              </div>
            </div>
          </div>
          <!--------------------------------------------------------------------------->
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
        <div class="row row-content p-2">
          <strong class="mb-3 mt-2">Generos Más Vistos</strong>
          <ul class="list-group shadow p-0 mb-5 rounded card-container">
            <li class="list-group-item"><div @click="destino('Action')" class="dropdown-item link-destino">Accion</div></li>
            <li class="list-group-item"><div @click="destino('Comedy')" class="dropdown-item link-destino">Comedia</div></li>
            <li class="list-group-item"><div @click="destino('Animation')" class="dropdown-item link-destino">Animacion</div></li>
            <li class="list-group-item"><div @click="destino('Horror')" class="dropdown-item link-destino">Terror</div></li>
            <li class="list-group-item"><div @click="destino('Romance')" class="dropdown-item link-destino">Romance</div></li>
          </ul>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
const url = 'https://yts.mx/api/v2/'
export default {
  data () {
    return {
      list_movies: null
    }
  },
  mounted () {
    this.axios.get(` ${url}list_movies.json?sort_by=year&limit=8 `).then((response) => {
      this.list_movies = response.data.data.movies
      console.log(this.list_movies)
    })
  },
  methods: {
    listPeliReciente () {
      this.$router.push(`/peliculas/${1}`)
    },
    showMovieDetails (id) {
      this.$router.push(`/movie/${id}`)
    },
    destino (genre) {
      this.$router.push(`/peliculas/${genre}/${1}`)
    }
  }
}
</script>
<style scoped>
  h5 {
    color: #fffffe;
  }
  p {
    color: rgb(235, 39, 25);
  }
  small {
    color: rgb(248, 248, 66);
  }
  .row-pelis {
    border-top: 1px solid rgb(248, 248, 66);
  }
  .row-content {
    background: #1b2557d9;
    border-radius: 10px;
  }
  .btn-mas {
    background: rgb(240, 72, 60);
    color: #fffffe;
  }
  .card-container {
    background: #5062bb83;
    border-radius: 10px;
  }
  .btn-mas:hover {
    background: rgb(235, 39, 25);
  }
  li {
    background: #5062bb83;
  }
  .link-destino {
        color: white;
        cursor:pointer;
        font-weight: bold;
    }
    .link-destino:hover{
        background: #912d2edc;
    }
  @media(min-width: 250px) and (max-width: 768px) {
        .row-content {
            margin-top: 20px;
        }
    }
</style>
