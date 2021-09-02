<template>
  <h3>放大镜</h3>
  <div class="wrapper">
    <div class="part">
      <Magnifier
        :imgUrl="imgUrl"
        :imgWidth="imgWidth"
        :imgHeight="imgHeight"
        :magWidth="magWidth"
        :magHeight="magHeight"
        :imgAlt="imgAlt"
      />
    </div>

    <block-code title="用法" :code="code" height="690px">
      <template #description>
        目前存在一个bug    改变窗口大小的时候会有偏差
      </template>    
     </block-code>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import img from "../assets/img/pxz.jpg";

export default {
  setup(props) {
    const state = reactive({
      imgUrl: img,
      imgWidth: 350,
      imgHeight: 463.5,
      magWidth: 100,
      magHeight: 100,
      imgAlt: "裴秀智",
    });
    return {
      ...toRefs(state),

      code: 
        `
   <template>     
    <Magnifier
      :imgUrl="imgUrl"
      :imgWidth="imgWidth"
      :imgHeight="imgHeight"
      :magWidth="magWidth"
      :magHeight="magHeight"
    :imgAlt="imgAlt"
     />
   </template>  
 
    import { reactive, toRefs } from 'vue'
    import img from './assets/img/pxz.jpg'

    export default {
    name: 'App',
    setup() {
    const state = reactive({
      imgUrl: img,
      imgWidth:350,
      imgHeight:463.5,
      magWidth:100,
      magHeight:100,
      imgAlt:'裴秀智'
    });
     return {
       ...toRefs(state)
      }
    }
  }
 
  `,
     
    };
  },
};
</script>
<style lang="scss" scoped>
.part {
  display: flex;
  justify-content: center;
}
</style>