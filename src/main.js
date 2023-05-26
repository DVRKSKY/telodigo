import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from './config/router'
import './config/styles.scss'

createApp(App)
.use(router)
.mount('#app')
