  
  
   
function getScrollTop() {  
  var scrollPos;  
  if (window.pageYOffset) {  
  scrollPos = window.pageYOffset; }  
  else if (document.compatMode && document.compatMode != 'BackCompat')  
  { scrollPos = document.documentElement.scrollTop; }  
  else if (document.body) { scrollPos = document.body.scrollTop; }   
  return scrollPos;   
} 
// console.log(res)
 function getStyle(el,style){
  return window.getComputedStyle(el)[style]
}
function getChildren(arry){
    const array = []
   arry.map(item=> {
    const el = item.children;
    for (const k of el) {
      array.push(k)
    }
    return array
    
  })
 
  return array
}

export { getStyle , getChildren ,getScrollTop}