const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input',function(x){
  console.log(x);
  const input = x.target.value; //lấy giá trị x khi nhập vào
  console.log(input);
  const length = input.length;
  console.log (length);
  const blurValue = 20 - length*2; 
  //mỗi lần nhập thì giảm 2 px tạo cho user có sự thay đổi lớn hơn là 10-length (thay đổi 1 px);
  console.log(blurValue);
  background.style.filter = `blur(${blurValue}px)`;
  //Sử dụng dấu huyền chứ ko phải dấu nháy @-@.
  //filter: lọc màu+sáng. giá trị blur là làm mờ ảnh
})
