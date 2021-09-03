import{h as s}from"./index.bdf9f0da.js";import{D as r,b as n,g as i,E as a,o as p,m as t}from"./@vue.7d74ca5c.js";import"./vue-router.342e4058.js";import"./highlight.js.b5fc8af4.js";import"./vue-highlightjs.1e67c88f.js";const l={directives:{highlightjs:s}},e={class:"container"},c=i("h3",null,"安装",-1),o={class:"part"},u=i("div",{class:"minintr"},"如何快速安装包",-1),m=[t("  npm 或 yarn 安装\r\n        "),i("code",{class:"javascript"},"\r\n       npm install Znfly-ui  \r\n       // or\r\n       yarn add Znfly-ui\r\n   ",-1)],d={class:"part"},v=i("div",{class:"minintr"},"在main.js里面进行以下操作",-1),f=[t("  导入ui组件\r\n        "),i("code",{class:"javascript"},"\r\n     import { createApp } from 'vue'\r\n     import App from './App.vue'\r\n     import Plugins from './lib/components'\r\n     import '@/assets/css/index.css'\r\n\r\n     const app = createApp(App)\r\n     app.use(Plugins)\r\n     app.mount('#app')\r\n   ",-1)],h=[t("  如果引入scss\r\n      "),i("code",null,"\r\n     import '@/assets/css/scss/index.css'\r\n   ",-1)];l.render=function(s,t,l,j,g,A){const b=r("highlightjs");return p(),n("div",e,[c,i("div",o,[u,i("div",null,[a(i("pre",null,m,512),[[b]])])]),i("div",d,[v,i("div",null,[a(i("pre",null,f,512),[[b]])]),i("div",null,[a(i("pre",null,h,512),[[b]])])])])};export{l as default};