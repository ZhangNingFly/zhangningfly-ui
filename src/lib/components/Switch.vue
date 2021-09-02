<template>
  <div :isChanged="isChanged"  :class="['box', disabled ? 'disabled' : '']" >
    <div class="men" v-if="disabled"></div>
    <div class="container">
      <span class="tit tit1">{{ title.beforeChange }}</span>
      <span
        
        @click="change"
        :class="['click', isChanged ? 'active' : '']"
        :style="[
        {backgroundColor:bg1},
         isChanged ? {backgroundColor:bg2} : null
        ]"
      >
        <span :class="['but', isChanged ? 'active' : '']"></span>
      </span>
      <span class="tit tit2">{{ title.Changed }}</span>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "@vue/reactivity";
export default {
  name: "Switch",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    bg1:{
      type:String,
      default: "#f40"
    },
     bg2:{
      type:String,
      default: "skyblue"
    },
    title:{
      type:Object,
      default:{
        beforeChange:" ",
        changed:" "
      }
    }
    // isChanged:{
    //   type:Boolean,
    //   default:false
    // }
  },

  setup(props) {
    const isChanged = ref(false);
    const change = () => {
      // console.log(111)
      isChanged.value = !isChanged.value;
    };
    
    return {
      change,
      isChanged,
    };
  },
};
</script>  
<style  lang="scss" scoped>
// $bg-color: #ff4400;
 div{
   display: inline-block;
 }
.box { 
   position: relative;
   .men{
   position: absolute;
   width: 100%;
   height: 100%;
   background-color: rgba($color: #fff, $alpha: 0.1);
   z-index: 999;
   }
   &.disabled {
      cursor: not-allowed;
    }
  .container {
  
    .tit {
      font-size: 14px;
      color: #333;
      display: inline-block;
      vertical-align: top;
      font-weight: bold;
    }
    .tit1 {
      padding-right: 10px;
    }
    .tit2 {
      padding-left: 10px;
    }
    .click {
      display: inline-block;
      position: relative;
      width: 40px;
      height: 20px;
      border-radius: 10px;
      // background-color: $bg-color;
      transition: 200ms linear;

      .but {
        content: " ";
        position: absolute;
        width: 20px;
        height: 16px;
        border-radius: 8px;
        background-color: #fff;
        top: 2px;
        left: 2px;
        // z-index: 1;
        transition: 200ms linear;
        &.active {
          left: 20px;
        }
      }
      &.active {
        background-color: skyblue;
      }
    }
  }
}
</style>