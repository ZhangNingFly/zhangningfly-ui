<template>
  <div class="content">
    <h3>开关</h3>
    <!--基础用法-->

    <Block-code title="基础用法" :code="code1" height="180px">
      <template #source>
        <Switch bg1="#2ecc71" bg2="#c0392b"> </Switch>
      </template>
      <template #description>
        bg1为点击之前的颜色，bg2为点击之后的颜色，可以自己设置
      </template>
    </Block-code>
    <!--文字描述-->
    <Block-code title="文字描述" :code="code2" height="350px">
      <template #source>
        <Switch :title="title"> </Switch>
      </template>
      <template #description> 可以在title里面设置文本内容 </template>
    </Block-code>
    <!--禁用状态-->
    <Block-code title="禁用状态" :code="code3" height="180px">
      <template #source>
        <Switch disabled> </Switch>
      </template>
      <template #description>
        给switch组件中添加disabled属性就可以禁用了
      </template>
    </Block-code>
  </div>
</template>

<script>


export default {
  data () {
    return { 
       title:{
         beforeChange:"关",
         Changed:"开",
       },
       code1: `
       <Switch  bg1 = "#2ecc71" bg2= "#c0392b">
         </Switch >
        `
       ,
       code2:  `
     <Switch :title="title">
     </Switch>
  
     export default {
       setup{
         return {
           title:{
          beforeChange:"关",
          Changed:"开",
           }
         }
       }
     }

        `
       ,
       code3: `
     <Switch  disabled>
      </Switch >
        `
       
    }
  },
}
</script>

<style scoped>
</style>
