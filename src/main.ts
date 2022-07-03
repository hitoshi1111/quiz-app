import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios' // 追記
import VueAxios from 'vue-axios' // 追記
import { Vue } from 'vue-class-component'

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(VueAxios, axios)
  .mount('#app')
