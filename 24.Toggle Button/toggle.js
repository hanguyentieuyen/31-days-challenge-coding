const checkbox= document.getElementById('checkbox');
checkbox.addEventListener('change',()=>{
  //change color
  document.body.classList.toggle('dark');
})