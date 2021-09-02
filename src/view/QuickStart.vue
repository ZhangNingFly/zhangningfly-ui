<template>
<div class="container">


  <h3>安装</h3>
  <div class="part">
    <div class="minintr">如何快速安装包</div>
    <div>
      <pre v-highlightjs>  npm 或 yarn 安装
        <code class="javascript">
       npm install Znfly-ui  
       // or
       yarn add Znfly-ui
   </code></pre>
    </div>
  </div>
  <div class="part">
    <div class="minintr">在main.js里面进行以下操作</div>
    <div>
      <pre v-highlightjs>  导入ui组件
        <code class="javascript">
     import { createApp } from 'vue'
     import App from './App.vue'
     import Plugins from './lib/components'
     import '@/assets/css/index.css'

     const app = createApp(App)
     app.use(Plugins)
     app.mount('#app')
   </code></pre>
    </div>

    <div>
      <pre v-highlightjs>  如果引入scss
      <code>
     import '@/assets/css/scss/index.css'
   </code></pre>
    </div>
  </div>
  </div>
</template>

<script>
import { highlightjs } from "../lib/directives/index";
export default {
  directives: {
    highlightjs,
  },
};
</script>

<style lang="scss">
 
</style>