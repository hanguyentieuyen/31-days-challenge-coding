const getMealBtn = document.getElementById('get_meal');
const mealContainer = document.getElementById('meal');
//fetch api 
getMealBtn.addEventListener('click', () => {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
    console.log(res);
		createMeal(res.meals[0]);
	});
});
                            
function createMeal(meal){
  const ingredients =[];
  for(i=1; i<=20; i++){
    if(meal[`strIngredient${i}`]){
      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
    }else {
      break;
    }
  }
  console.log(ingredients);
  
  // add dom 
  mealContainer.innerHTML = `
      <div class="row">
        <div class="columns five">
           <img src="${meal.strMealThumb}" alt ="Meal Img" />
           <p><strong>Category:</trong> ${meal.strCategory}</p>
           <p><strong>Area:</strong> ${meal.strArea}</p>
           <p><strong>Tags:</strong> ${meal.strTags}</p>
           <h5>Ingredients:</h5>
           <ul>
              ${ingredients.map(ingredient=>`
                  <li>${ingredient}</li>
              `).join('')}
              
           </ul>
        </div>
        <div class="columns seven">
           <h4>${meal.strMeal}</h4>
           <p>${meal.strInstructions}</p>
        </div>
        <div class="row">
           <h5>Video</h5>
           <div class="videoWrapper">
              <iframe width="420" height="315" src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"></iframe>
           </div>
        </div>
      </div>
`;
}
/**Note**/
//Hàm join sẽ nối các phần tử của mảng thành một chuỗi, các phần tử được ngăn cách nhau bởi kí tự do người dùng quy định (xài khoảng trắng), mặc định là dấu  ",". 
// Cú pháp: array.slice(start, end)
// start là vị trí bắt đầu trích xuất.
// end là vị trí kết thúc, kết quả sẽ không bao gồm phần tử end.
// Chỉ số âm tính ngược từ cuối mảng về bắt đầu từ -1.
