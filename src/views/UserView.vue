<template>
    <MenuTv/>
    <div class="container-fluid">
            <div class="row">
                <div class="d-flex flex-column fondo-row alig">
                    <div class="picture mt-3">
                            <img src="../../public/avatar-perfil-2.jpg" id="img-user" class="img-thumbnail">
                    </div>
                    <div class="date-name">
                            <h3 class="d-inline">{{ user.name }}</h3>
                            <h3 class="d-inline ms-2">{{ user.last_name }}</h3>
                    </div>
                    <div class="date-email">
                            <h4>{{ user.email }}</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="about">
                    <nav>
                    <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Peliculas Favoritas</button>
                    </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div v-if="list_favorit" class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                            ACA VAN LAS PELICULAS FAVORITAS DEL USUARIO...
                        </div>
                        <div v-else>¡No Posee Ninguna Informacion!</div>
                    </div>
                </div>
            </div>
    </div>
    <FooterTv/>
</template>

<script>
import MenuTv from '../components/MenuTv.vue'
import FooterTv from '../components/FooterTv.vue'
export default {
  components: { MenuTv, FooterTv },
  data () {
    return {
      user: this.$store.state.user,
      token: this.$store.state.token,
      id: this.$route.params.id,
      list_favorit: null
    }
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
    }
  }
}
</script>

<style scoped>
.card-container {
  padding: 10px 0;
  width: 100%;
  border-radius: 10px;
  color: rgba(0,0,0, 0.87);
  background: #1b2557d9;
  }
  .fondo-row {
    background-image: url('../../public/banner-1.jpg');
    width: 100%;
  }
  #img-user {
    width: 20%;
    height: 80%;
    border-radius: 100%;
  }
  .about {
    background: #1b2557d9;
  }
  /* .image-container {
  min-height: 100vh;
  background-position: center center;
  background-size: cover;
  position: relative;
  }
  .image-container:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    } */
</style>
