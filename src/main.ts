import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import addVant from './plugins/vant'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(createPinia())

addVant(app)

app.mount('#app')
