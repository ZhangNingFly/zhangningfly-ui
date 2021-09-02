<template>
  <div class="blockCode">
    <h1 class="blockTit">{{title}}</h1>
    <div class="block">
        <div class="source">
            <slot name="source"></slot>
        </div>
        
        <div class="code" :style="'height:'+codeHeight">
            <div class="description">
            <div class="description-wrap">
            <slot name="description"></slot>
            </div>
        </div>
            <pre style="margin:0" v-highlightjs><code>{{ code }}</code></pre>
        </div>
        <div class="blockCodeControl" @click="is_hideCode" :isHiden="isHiden" >
            <i class="block-icon iconfont icon-arrow-down" :style="'transform:rotate('+block_deg+'deg);'"/>
            <span class="block-span">{{block_text}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { onUnmounted, ref, watch, watchEffect } from 'vue'
import {  highlightjs  } from "../directives/index.js"
export default {
    
  directives: {
    highlightjs,
  },
  name: 'BlockCode',
  props:{
      title:{
          type:String,
          required:true
      },
      code:{
          type:String,
          required:true
      },
      height:{
          type:String,
          required:true
      }
  },
  setup(props) {

   let block_text = ref('show')
   let codeHeight = ref("0px")
   let isHiden = ref(false)
   let block_deg = ref(0)
   const is_hideCode = ()=>{
       isHiden = !isHiden
        if (!isHiden) {
         block_deg.value  = 0;
         codeHeight.value = "0px";
         block_text.value = "show"   
       } else {
         block_deg.value  = 180;
         codeHeight.value = props.height;
         block_text.value = "hiden"   
       }
   }
//    onUnmounted(()=>{
//       props.height = "0px" 
//    }) 
//    watchEffect(()=>{
//        console.log(isHiden.value)
//    })
   
       return {
        block_text,
        is_hideCode,
        codeHeight,
        isHiden,
        block_deg

    }
  }
  
 
}
</script>

<style scoped>
.blockCode{
    width:100%;
    
}
.block{
    border:1px solid #ebebeb;
    transition: .4s all;
}
.block:hover{
    box-shadow:0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5)
}
.blockTit{
    margin: 55px 0 20px;
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
}
.source{
position: relative;
    padding: 24px;
}
.description{
    padding: 10px;
    background: #fafafa;
}
.description-wrap{
    padding:14px;
    background: white;
    border: 1px solid #eaeefb
}
.code{
    background: #282c34;
    border-top: 1px solid #eaeefb;
    -webkit-transition: height 0.2s;
    transition: height 0.2s;
    overflow: hidden;
}
.blockCodeControl{
    height:44px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
}
.block:hover .block-icon{
    color:#7763e9;
    margin-left:-40px
}
.block:hover .block-span{
    color:#7763e9;
    transform: translateX(0px);
    opacity: 1;
}
.blockCodeControl .block-icon{
    display: inline-block;
    line-height: 44px;
    font-size:16px;
    color:#d3dce6;
    transition: .2s;
}
.blockCodeControl .block-span{
    display: inline-block;
    line-height: 44px;
    font-size:14px;
    color:#d3dce6;
    transform: translateX(30px);
    transition: .3s;
    opacity: 0;
    margin-left:10px
}

</style>
