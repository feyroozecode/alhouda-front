import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'
// import vuetify and other based vuetify components
import 'vuetify'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives
})

app.component('App', App)

app.use(router)
app.use(vuetify)
app.mount('#app')
