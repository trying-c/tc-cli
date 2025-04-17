import { createApp } from 'vue'
import { createPinia } from "pinia";
import ViewUIPlus from 'view-ui-plus'
import './style.css'
import App from './App.vue'
import 'view-ui-plus/dist/styles/viewuiplus.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(ViewUIPlus)
app.mount('#app')

