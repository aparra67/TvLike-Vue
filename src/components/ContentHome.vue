<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
        <div class="row-content p-3">
          <div class="d-flex justify-content-between align-items-center mt-3">
            <strong class="d-inline">Peliculas Recientes</strong>
            <!-- boton para ir a la Vista de todas las peliculas recientes -->
            <button type="button" class="btn btn-mas shadow mb-3" @click="listPeliReciente">Ver más</button>
            <!-------------------------------------------------------------->
          </div>
          <!-------------- Diseño para mostrar 12 peliculas recientes en el contenedor principal-------->
          <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 row-pelis">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3" v-for="item in list_movies" :key="item.id">
              <div class="card shadow p-3 mb-5 h-100 card-container">
                <button type="link" @click="showMovieDetails(item.id)">
                  <img :src="item.medium_cover_image" class="card-img-top img-thumbnail img-peli">
                </button>
                <div class="card-body card-body-link" @click="showMovieDetails(item.id)">
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
          <strong class="mb-3 mt-2">Todos los Generos</strong>
          <ul class="list-group shadow p-0 mb-5 card-container-genre">
            <li class="list-group-item link-content"><div @click="destino('Action')" class="dropdown-item link-destino">Accion</div></li>
            <li class="list-group-item"><div @click="destino('Animation')" class="dropdown-item link-destino">Animacion</div></li>
            <li class="list-group-item"><div @click="destino('Biography')" class="dropdown-item link-destino">Biografia</div></li>
            <li class="list-group-item"><div @click="destino('Comedy')" class="dropdown-item link-destino">Comedia</div></li>
            <li class="list-group-item"><div @click="destino('Crime')" class="dropdown-item link-destino">Crimen</div></li>
            <li class="list-group-item"><div @click="destino('Drama')" class="dropdown-item link-destino">Drama</div></li>
            <li class="list-group-item"><div @click="destino('Family')" class="dropdown-item link-destino">Familiar</div></li>
            <li class="list-group-item"><div @click="destino('Fantasy')" class="dropdown-item link-destino">Fantasia</div></li>
            <li class="list-group-item"><div @click="destino('Sci-Fi')" class="dropdown-item link-destino">Ficcion</div></li>
            <li class="list-group-item"><div @click="destino('Romance')" class="dropdown-item link-destino">Romance</div></li>
            <li class="list-group-item"><div @click="destino('Horror')" class="dropdown-item link-destino">Terror</div></li>
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
    this.cargarPelis()
  },
  methods: {
    async cargarPelis () {
      try {
        await setTimeout(() => {
          this.axios.get(` ${url}list_movies.json?sort_by=year&limit=8 `).then((response) => {
            this.list_movies = response.data.data.movies
          })
        }, 1200)
      } catch (error) {
        console.log(error)
      }
    },
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
    background: #831120;
    color: #fffffe;
    border-radius: 8px;
    padding: 10px 15px;
  }
  .card-container {
    background: #464555dc;
    border-radius: 10px;
  }
  .card-container-genre {
    border-radius: 10px;
  }
  .card-body-link {
    cursor: pointer;
  }
  .btn-mas:hover {
    background: rgb(235, 39, 25);
    color: #344181d9;
  }
  li {
    background: #464555dc;
    margin-bottom: 5px;
    border-radius: 8px;
  }

  .link-destino {
    background: #5062bb00;
    color: white;
    cursor:pointer;
    font-weight: bold;
  }
  li:hover{
    background: #ABA9BC;
    color: #344181d9;
  }
  .link-destino:hover {
    color: #344181d9;
  }
  @media(min-width: 250px) and (max-width: 768px) {
        .row-content {
            margin-top: 20px;
        }
    }
</style>
