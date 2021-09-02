// "user strict"
import { getStyle } from '../utils/tools.js'
import { getScrollTop } from "../utils/tools.js"
export default {
  mounted(el) {
    const oImgWrap = el;
    const oMagWrap =  oImgWrap.querySelector('.mag-wrap');
    const  oMagImg = oMagWrap.querySelector('.mag-img');
    const imgWidth = parseInt (getStyle(oImgWrap,'width'));
    const imgHeight =parseInt(getStyle(oImgWrap,'height'));
    const magHeight =parseInt(getStyle(oMagWrap,'height'));
    const magWidth = parseInt (getStyle(oMagWrap,'width'));
    const imgX = oImgWrap.offsetLeft;
    const imgY = oImgWrap.offsetTop;
    let res = null;
    
       
      window.onscroll = ()=>{
      //  console.log(res)
       res =  getScrollTop() 
     
     } 
   
   
    const init = () => {
        bindEvent();
        res = getScrollTop();
    }
    function bindEvent () {
      oImgWrap.addEventListener('mouseover',function(e){
         oMagWrap.className += ' show';
         showMag(getXY(e))
         document.addEventListener('mousemove', handleMouseMove)  
      })
      oImgWrap.addEventListener('mouseout',handleMouseOut)
    }

     function handleMouseMove (e) {
        showMag(getXY(e))
     }

     function handleMouseOut () {
        oMagWrap.className = 'mag-wrap';
        document.removeEventListener('mousemove',handleMouseMove)
     }

     function showMag(options){
       const { x, y, mouseX , mouseY } = options;
      //  var res = null;

      
       oMagImg.style.left = -x +'px';
       oMagImg.style.top = - (y +res)+ 'px';
       oMagWrap.style.left = x + 'px';
       oMagWrap.style.top = y +res+ 'px';
       if (mouseX < 0 || mouseY +res < 0 || 
        mouseX > imgWidth ||  mouseY > imgHeight - res) {
        oMagWrap.className = 'mag-wrap';
        document.removeEventListener('mousemove',handleMouseMove)
        }
      
     }
 
     function getXY (e) {
         return {
          x:e.pageX-imgX-magWidth/2,
          y:e.clientY-imgY-magHeight/2,
          mouseX:e.pageX-imgX,
          mouseY:e.clientY-imgY
         }
     }

    init ();
   
  }
}