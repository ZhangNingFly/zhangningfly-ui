<template>
    <h3>五星好评</h3>
    <block-code title="用法" height = "540px" :code="code">
     <template #source>
      <stars
          :num="num"
          :size="size"
         >
            网站评价 
         </stars>
     </template>
     <template #description>
        
      组件设置了槽口这里我用了"网站评价"
      <br/>
      在 setup 里设置图标大小以及默认星星数量       
         
     </template>
    </block-code>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
export default {
    setup(props) {
      const state = reactive({
        num:3,
        size:2
      }) 
      return {
        ...toRefs(state),
        code:
          `
    
    <stars
     :num="num"
     :size="size"
     >  
    网站评价 
    </stars> 
       
            
  import { reactive, toRefs } from '@vue/reactivity'
  export default {
    setup(props) {
      const state = reactive({
        num:3,
        size:2
      }) 
      return {
        ...toRefs(state),   
         } 
      }
    }
      
          `     
      }  
    }
}
</script>