import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import router from './Cart.updated'

const app = createApp(App)

app.use(router)

app.mount('#app')
