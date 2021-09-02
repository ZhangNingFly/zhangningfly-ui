<template>
  <header>
    <div class="wrapper">
      <span class="logo">Znfly-ui</span>
      <a href="https://zhangningfly.github.io/zn-ui/">
        <span class="iconfont icon-git"></span>
      </a>
      <span class="search">
        <span class="iconfont icon-search"></span>
        <input type="text" placeholder="Search" />
      </span>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ccc;
  z-index: 999;
  background-color: #fff;
  // margin-bottom: 50px;
  .wrapper {
      padding: 14px 5%;
    a {
      float: right;
      .icon-git {
        font-size: 30px;
      }
    }
    .logo {
      font-size: 25px;
      font-weight: bold;
      color: #e15f41;
      margin-right: 20%;
    }
    .search {
      float: right;
      margin-right: 5%;
      margin-top: 3px;
      position: relative;
      .icon-search {
        position: absolute;
        top: 6px;
        left: 10px;
      }
      input {
        outline: 0;
        border-radius: 20px;
        font-style: 20px;
        width: 150px;
        font-size: 14px;
        height: 25px;
        text-indent: 2.5rem;
      }
    }
    .search:hover input {
      border: 2px solid skyblue;
    }
  }
}
</style>