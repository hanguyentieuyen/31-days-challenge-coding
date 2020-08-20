
const change = document.getElementById('change');
const color = document.getElementById('color');
const body = document.body;

change.addEventListener('click',changeRGB);

function getRandomColor(){
    return Math.floor(Math.random()*256);
}

function changeRGB(){
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const color3 = getRandomColor();

    const colorString = `rgb(${color1},${color2},${color3})`;
    body.style.background = colorString;
    color.innerText = colorString;
}