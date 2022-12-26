import { createApp } from 'vue'
// import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from '@/store/store'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.use(store)
app.mount('#app')

// createApp(App).use(router).mount('#app')
