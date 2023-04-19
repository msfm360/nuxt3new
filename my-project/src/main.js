import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import store from './store'
import router from './router'
import { createHead } from "@vueuse/head"


// x


const app = createApp(App)
const head = createHead()
app.use(head)
app.use(store)
app.use(MotionPlugin)
app.use(router)
app.mount('#app')
