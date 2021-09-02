import Stars from './Stars.vue'
import Magnifier from './Magnifier.vue'
import BlockCode from './BlockCode.vue'
import Icon from './Icon.vue'
import Button from "./Button.vue"
import Tablepro from "./Tablepro.vue"
import Input from "./Input.vue"
import ClearInput from "./ClearInput.vue"
import Switch from "./Switch.vue"
import Select from "./Select.vue"


const componentPool = [
    Stars,Magnifier,BlockCode,Icon,Button,Tablepro,Input,ClearInput,Select,Switch
]

export default {
    install(app,options){
      const { components } =  options;
      if (components) {
          componentPool.map(comp=>{
            components.map(item => {
              if (comp.name == item) {
                 app.component(comp.name,comp) 
              }
            })
          })
      } else {
         componentPool.map(el=>{
            app.component(el.name,el)  
         })
      }  
    }
}