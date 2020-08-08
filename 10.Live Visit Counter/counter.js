// fetch api : https://countapi.xyz/
// https://www.npmjs.com/package/countapi-js
const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
  //Tạo một request network bằng fetch
	fetch('https://api.countapi.xyz/update/youtube.com/?amount=1')
  
	.then(res => res.json())    //respone giá trị json
	.then(res => {
		countEl.innerHTML = res.value;  // lấy value để add vào id
	})
}
var a=;