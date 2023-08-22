import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import axios from 'axios'

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
})

// In production, replace by the domain name serving the API
// e.g. axios.defaults.baseURL = "https://my-web-app.azurewebsites.net/"
axios.defaults.baseURL = "http://localhost:8000"

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
