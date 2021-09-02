<template>
  <div :class="['container', disabled ? 'disabled' : '']">
    <div class="men" v-if="disabled"></div>
    <div class="input-wrap" @click="change">
      <input
        type="text"
        readonly="readonly"
        :isClick="isClick"
        :class="isClick ? 'active' : ''"
        :value="value"
      />
      <i
        class="iconfont icon-arrow-down deg"
        :style="'transform:rotate(' + deg + 'deg);'"
      />
    </div>

    <div class="wrap" v-show="isClick">
      <span class="tri"></span>
      <ul>
        <li
          v-for="item in data"
          :key="item.id"
          @click="setValue(item)"
          :class="item.disabled ? 'disabled' : ''"
          ref="root"
        >
          <div class="men" v-if="item.disabled"></div>
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { onMounted } from '@vue/runtime-core'
export default {
  name: "Select",
  props: {
    data: {
      type: Array,
      default: [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["change"],
  setup(props, ctx) {
    const value = ref("请选择");
    const deg = ref(0);
    const isClick = ref(false);
    const root = ref(null)
    //  onMounted(()=>{
    //    console.log(root.value.innerText)
    //  })
    const setValue = (item) => {
      if (item.disabled) {
        return;
      }
      value.value = item.label;
      isClick.value = !isClick.value;
    };
    const change = () => {
      isClick.value = !isClick.value;
      ctx.emit("change", isClick.value);
    };
    watch([isClick, deg], () => {
      if (isClick.value) {
        deg.value = 180;
      } else {
        deg.value = 0;
      }
    });
    return {
      isClick,
      change,
      deg,
      value,
      setValue,
      root
    };
  },
};
</script>
<style  lang="scss" scoped>
.men {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #fff, $alpha: 0.1);
  z-index: 999;
}
.container {
  width: 240px;
  position: relative;

  &.disabled {
    cursor: not-allowed;
  }
  input {
    cursor: pointer;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &.active {
      border-color: #409eff;
    }
  }
  .deg {
    position: absolute;
    top: 12px;
    right: 10px;
    color: #999;
    transition: 200ms linear;
    cursor: pointer;
  }
  .wrap {
    position: relative;
    margin-top: 18px;
    transition: 1s linear;
    .tri {
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #fff;
      position: absolute;
      left: 30px;
      top: -6px;
    }

    ul {
      border: 1px solid #e4e7ed;
      padding: 5px 0;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 2px 30px 0 rgb(0 0 0 / 10%);
    }
    //  height: 160px;
    li {
      // padding: 10px 15px;
      line-height: 35px;
      text-indent: 1.5em;
      cursor: pointer;
      position: relative;
      &.disabled {
        cursor: not-allowed;
        color: #e4e7ed;
        &.active {
          color: aqua;
          font-weight: bold;
        }
      }
      li:hover {
        background-color: #eee;
      }
    }
  }
}
</style>