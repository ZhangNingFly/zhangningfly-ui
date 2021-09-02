<template>
  <my-header />
  <div>
    <div>
      <side-menu></side-menu>
      <div class="main">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import SideMenu from "@/components/SideMenu.vue";
import { useRouter } from 'vue-router';
// import SideMenu from './components/SideMenu.vue'

export default {
  components: {
    MyHeader,
    SideMenu,
  },
  setup(props) {
    // const router = useRouter()
    // router.push('/')
  }
};

// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style lang="scss">
div::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 5px !important;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 5px !important;
}

div::-webkit-scrollbar-thumb {
    /* 滚动条里面小方块 */
    background: #eee !important;
}

div::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    background: #fff !important;
}

/*滚动条样式*/
html::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 7px !important;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 7px !important;
}

html::-webkit-scrollbar-thumb {
    /* 滚动条里面小方块 */
    background: #b6b6b6 !important;
}

html::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    background: #fff !important;
}


</style>
