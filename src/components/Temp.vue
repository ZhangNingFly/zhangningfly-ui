<template>
     <div class="view">
    <article >
      <div>
        <router-view></router-view>
      </div>
    </article>
  </div>
</template>

<style lang="scss" scoped>
    .view {
     margin-top: 100px;
     float: right;
     width: 70%;
     article>div {
         padding:0 20% 5% 0;
       
     }
    }
</style>