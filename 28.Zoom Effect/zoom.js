const{body} = document;
let zoomActivated = false;
//cửa sổ trình duyệt browser 
window.addEventListener('keydown',(m)=>{
  if(m.key === 'z'){
    zoomActivated = !zoomActivated;
  }
});
window.addEventListener('mousemove',(m)=>{
  const {clientX: x, clientY: y} = m;
  if(zoomActivated){
      body.style.transform = 'scale(2)';
      body.style.transformOrigin = `${x}px ${y}px`;
  }else{
    body.style.transform ='none';
  }

});