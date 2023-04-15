import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import store from './store'
import router from './router'
// x


const app = createApp(App)
app.use(store)
app.use(MotionPlugin)
app.use(router)
app.mount('#app')
