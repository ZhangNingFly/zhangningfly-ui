var e=Object.defineProperty,n=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(n,t,r)=>t in n?e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r;import{r as u,I as c,f as i,b as l,k as p,l as f,F as m,g as b,o as d,m as v}from"./@vue.7d74ca5c.js";const y={setup(e){const i=u({num:3,size:2});return l=((e,n)=>{for(var t in n||(n={}))s.call(n,t)&&a(e,t,n[t]);if(r)for(var t of r(n))o.call(n,t)&&a(e,t,n[t]);return e})({},c(i)),n(l,t({code:'\n    \n    <stars\n     :num="num"\n     :size="size"\n     >  \n    网站评价 \n    </stars> \n       \n            \n  import { reactive, toRefs } from \'@vue/reactivity\'\n  export default {\n    setup(props) {\n      const state = reactive({\n        num:3,\n        size:2\n      }) \n      return {\n        ...toRefs(state),   \n         } \n      }\n    }\n      \n          '}));var l}},O=b("h3",null,"五星好评",-1),j=v(" 网站评价 "),z=v(' 组件设置了槽口这里我用了"网站评价" '),g=b("br",null,null,-1),P=v(" 在 setup 里设置图标大小以及默认星星数量 ");y.render=function(e,n,t,r,s,o){const a=i("stars",!0),u=i("block-code");return d(),l(m,null,[O,p(u,{title:"用法",height:"540px",code:r.code},{source:f((()=>[p(a,{num:e.num,size:e.size},{default:f((()=>[j])),_:1},8,["num","size"])])),description:f((()=>[z,g,P])),_:1},8,["code"])],64)};export{y as default};
