const container= document.getElementById('container');
const colors=['#e74c3c','#8e44ad','#3498db','#e67e22','#2ecc71']
const soluongSquares = 1000;

for(let i=0; i<soluongSquares; i++){
//Hàm tạo thành phần element mới createElement('thẻ HTML')  
  const square = document.createElement('div');
//Hàm classList.add() sẽ thêm một class vào thẻ html 
  square.classList.add('square'); 
  
//Bắt sự kiện cho mouseover và mouseout
  square.addEventListener('mouseover',() => {
    setColorToElement(square);
  });
  
  square.addEventListener('mouseout',() => {
    removeColorFromElement(square);
  });
//Dùng để thêm vào vị trí cuối cùng của đối tượng một thẻ HTML  
  container.appendChild(square);
}

//Hàm radom màu sắc
function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
// floor() là hàm làm tròn trả về số nguyên nhỏ hơn .
// radom() có giá trị từ 0 ---> 1.
// Giả sử max radom = 1 * 5(độ dài mảng) = 5 => floor=5
// Giả sử max radom = 0.45 * 5(độ dài mảng) = 2.25 =>floor=2
}

function setColorToElement(element){
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}


function removeColorFromElement(element){
  element.style.background = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}
