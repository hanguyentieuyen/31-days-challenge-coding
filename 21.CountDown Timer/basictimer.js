const startMinutes = 1;
let time = startMinutes * 60;
const countdownElement=document.getElementById('countdown');

setInterval (updateCountdown,1000);

function updateCountdown(){
  const minutes= Math.floor(time/60);
  console.log(minutes);
  let seconds = time % 60;
  console.log(seconds);
  seconds = seconds < 10 ? '0' +seconds:seconds;

  countdownElement.innerHTML= `${minutes}:${seconds}`;
  time --;
  
    
}
