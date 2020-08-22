const counters = document.querySelectorAll('.counter');
counters.forEach(function(counter){
    counter.innerText = '0'; // Thêm giá trị counter ="0" vào class counter.
    const updateCounter = ()=>{
      
      const target = counter.getAttribute('data-target'); //target = 13000
      const a = +counter.innerText;
      
      const increment = target / 1000; //tăng hàng chục
      
      if(a < target){
        counter.innerText = `${Math.ceil(a + increment)}`;
        //Math.ceil lấy giá trị phần nguyên lớn hơn hoặc bằng
        setTimeout(updateCounter,1); //sau 1 ms chạy hàm updateCounter;
      
      }else {
        counter.innerText = target;
      }
    };
  updateCounter();
});
  