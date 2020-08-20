/*Cứ sau 100ms thì lặp lại function tạo bông tuyết*/
setInterval(createSnowFlake,50);

function createSnowFlake(){
  const snow_flake = document.createElement('i');
  
/*Hàm này sẽ thêm cáclass vào thẻ html <i>.*/
  snow_flake.classList.add('fas');
  snow_flake.classList.add('fa-snowflake');
  
/* BOM (Browser Object Model) là các đối tượng liên quan đến trình duyệt: innerWidth: lấy chiều dài của trình duyệt*/ 
  snow_flake.style.left = Math.random() * window.innerWidth +'px'; 
/*Gắn node snow_flake vào body*/
  document.body.appendChild(snow_flake);
  
/*Làm mờ bông tuyết ngẫu nhiên*/ snow_flake.style.opacity=Math.random(); 
  
/*Kích thước bông tuyết ngẫu nhiên từ 1px -> 10px */
  snow_flake.style.fontSize=Math.random()*10 + 10 + 'px';
  
 /*Tốc độ rơi các bông tuyết khác nhau ngẫu nhiên từ 3s - 6s. Để khi bằng 6s thì hàm remove chạy làm mất bông tuyết.*/
  
  snow_flake.style.animationDuration=Math.random()*3 + 3 + 's';
 /*Sau 6s sẽ xóa element snow_flake*/
 setTimeout(()=>{
    snow_flake.remove();
  },6000);
}