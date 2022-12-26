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
      <div class="row mt-3">
        <div class="container form-container p-3">
          <form @submit.prevent="onSubmit">
            <h4 class="mt-2">Editar Perfil</h4>
            <div class="mb-3">
              <label for="name" class="form-label">Nombre</label>
              <input  v-model="user.name" type="text" class="form-control" id="name">
            </div>
            <div class="mb-3">
              <label for="last-name" class="form-label">Apellido</label>
              <input v-model="user.last_name" type="text" class="form-control" id="last-name">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input v-model="user.email" type="email" class="form-control" id="email" disabled>
            </div>
            <div class="mb-3">
              <label for="pass" class="form-label">Contraseña Nueva</label>
              <input type="password" class="form-control" id="pass">
            </div>
            <div class="mb-3">
              <label for="pass-repeat" class="form-label">Repetir Contraseña</label>
              <input type="password" class="form-control" id="pass-repeat">
            </div>
            <div class="mb-3">
              <button type="submit" class="btn btn-save shadow" @click="savePerfil(user.id)">Guardar</button>
            </div>
          </form>
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
      list_favorit: null,
      pass: '',
      passConfirm: ''
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
    },

    savePerfil (id) {
      if (!this.isEmpty()) {
        this.$store.dispatch('register', {
          name: this.user.name,
          last_name: this.user.last_name,
          password: this.pass,
          password_confirmation: this.passConfirm
        }, id).then((resp) => {
          console.log('Usuario Editado con Exito')
          setTimeout(() => {
            this.$router.push(`/user/${id}`)
            // location.replace('/')
          }, 1500)
        }).catch((err) => {
          // this.clicked = false
          // eslint-disable-next-line no-console
          console.log(err)
          // MENSAJE DE ERROR
        })
      } else {
        console.log('Hay campos obligatorios que deben completarse')
      }
    },

    isEmpty () {
      return this.user.name === '' || this.user.last_name === ''
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
  .form-container {
    background: #1b2557d9;
    width: 70%;
    height: auto;
    border-radius: 12px;
  }
  .btn-save {
    background: rgb(240, 72, 60);
    color: #fffffe;
  }
  .btn-save:hover {
    background: rgb(235, 39, 25);
  }
</style>
