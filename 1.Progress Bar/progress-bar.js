
const progress = document.querySelector(".progress-done"); //return first value
setTimeout(() => {
  progress.style.width = progress.getAttribute('data-done') + '%';
progress.style.opacity = 1;
},600)

