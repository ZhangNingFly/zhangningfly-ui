import { createRouter, createWebHashHistory } from "vue-router";
import Temp from '../components/Temp.vue'


const routes = [
  {
    path: '/',
    redirect:'/start/intro',
  },

  {
    path: '/start',
    name: "开发指南",
    component: Temp,
    children:[
    {
      path: 'intro',
      name: '安装',
      component: () => import('../view/QuickStart.vue')
    },
    // {
    //   path:'quickstart',
    //   name:'快速上手',
    //   component:() => import('../view/QuickStart.vue')
    // }
   ]
  }
   ,
 
  {
    path: '/basis',
    name: "基础",
    component: Temp,
    children: [
      {
        path: 'icon',
        name: '图标',
        component: () => import('../view/Icon.vue')
      },
      {
        path: 'button',
        name: '按钮',
        component: () => import('../view/Button.vue')
      },
    ]
  },
  {
    path: '/form',
    name: "表单",
    component: Temp,
    children: [
      {
        path: 'input',
        name: '输入框',
        component: () => import('../view/Input.vue')
      },
      {
        path: 'switch',
        name: '开关',
        component: () => import('../view/Switch.vue')
      },
      {
        path: 'select',
        name: '下拉框',
        component: () => import('../view/Select.vue')
      },
    ]
  },
  {
    path: '/tool',
    name: "小工具",
    component: Temp,
    children: [
      {
        path: 'magnifier',
        name: '放大镜',
        component: () => import('../view/Magnifier.vue')
      },
      {
        path: 'stars',
        name: '五星好评',
        component: () => import('../view/Stars.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



export default router