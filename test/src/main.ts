import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from 'vuex'
// create new store
const store = createStore({
    state () {
        return {
            count: 5
        }   
    },
})

import './assets/main.css'
const app = createApp(App)
app.use(store)
app.mount('#app')
// createApp(App).mount('#app')
