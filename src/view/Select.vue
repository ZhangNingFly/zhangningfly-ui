<template>
  <div class="contnet">
    <h3>下拉框</h3>
    <Block-code title="基础用法" :code="code" height="550px">
      <template #source>
        <Select :data="data"> </Select>
      </template>
      <template #description> 这里只需要把data的数据传上去就行了 </template>
    </Block-code>
     <Block-code title="禁用某个选项" :code="code2" height="550px">
      <template #source>
        <Select :data="data1"> </Select>
      </template>
      <template #description> 只需要在组件上加上disabled这个属性 </template>
    </Block-code>
    <Block-code title="禁用状态" :code="code3" height="550px">
      <template #source>
        <Select :data="data" disabled> </Select>
      </template>
      <template #description> 只需要在组件上加上disabled这个属性 </template>
    </Block-code>
  </div>
</template>
<script>
// import { ref } from 'vue'

export default {
  setup() {
    return {
      data: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
       data1: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
          disabled:true
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      code2: `
     <Select :data="data"> </Select>
     export default {
       setup() {
        return {
          data: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎',
          disabled: true
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        }
     }
  }  
        `,
      code: `
     <Select :data="data" disabled> </Select>
     export default {
       setup() {
        return {
          data: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        }
     }
  }  
        `,
          code3: `
     <Select :data="data" 
     disabled> </Select>
     export default {
       setup() {
        return {
         
        }
     }
  }  
        `,
    };
  },
};
</script>