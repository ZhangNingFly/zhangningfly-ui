import { createApp } from 'vue'

import App from './App.vue'
import Plugins from './lib/components'
import router from './router'
import '@/assets/css/demo-wrapper.scss'
import '@/assets/css/iconfont.css'
import 'highlight.js/styles/base16/gruvbox-dark-pale.css'

import vueHighlightJS from 'vue-highlightjs'


const app = createApp(App)
app.use(router)
app.use(Plugins,{ components: null })
app.use(vueHighlightJS)
app.mount('#app')
