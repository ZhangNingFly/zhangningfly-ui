<template>
  <aside>
    <div>
      <nav>
        <ul>
          <li v-for="item in title" :key="item.id">
            <h4>{{ item.name }}</h4>
            <ul v-if="item.children">
              <li v-for="el in item.children" :key="el.id">
                <router-link
                  active-class="hover"
                  :to="`${item.path}/${el.path}`"
                  class="link"
                >
                  {{ el.name }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
  <div></div>
</template>

<script>

import {  useRouter } from "vue-router";

export default {
  setup(props) {
    const { options } = useRouter();
    const title = options.routes;
    // console.log(title)
    return {
      title,
    };
  },
};
</script>

<style lang="scss">
aside {
  position: fixed;
  width: 30%;
  top: 80px;
  overflow: auto;
  div {
    padding-left: 20%;
    li {
      margin: 10px;
    }
    h4 {
      font-size: 20px;
      font-weight: normal;
      //  margin-bottom: 20px;
    }
    .link {
      display: inline-block;
      width: 50%;
      padding: 5px 20px;
      // border: 1px solid red;
    }
    .hover {
      color: #2980b9;
      background-color: rgba($color: #27ae60, $alpha: 0.1);
      border-radius: 5px;
    }
  }
}
</style>