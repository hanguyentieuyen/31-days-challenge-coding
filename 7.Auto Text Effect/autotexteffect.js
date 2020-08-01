const text = document.getElementById('text');
const addText = "I Love Programing!";
let idx = 1;
setInterval(writeText, 300);
function writeText(){
     
    text.innerText=addText.slice(0,idx);
    //Hàm slice có chức năng trích xuất một số phần tử của mảng, vị trí bắt đầu và kết thúc việc trích xuất sẽ được xác định bởi tham số addText truyền vào hàm. Ko bao gồm phần tử end.
    idx++;
    if(idx > addText.length){
        idx = 1;
    }
}