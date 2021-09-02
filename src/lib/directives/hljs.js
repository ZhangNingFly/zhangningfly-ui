import hljs from "highlight.js";
export default {
    mounted(el) {
     const blocks = el.querySelectorAll("pre code");
      blocks.forEach(item=>{
         hljs.highlightElement(item)
      })   
    }
}