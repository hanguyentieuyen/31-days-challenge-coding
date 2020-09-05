const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('passwordCheck');

// khi submit thì check input hợp lệ hay ko?

form.addEventListener('submit', x =>{
  x.preventDefault();
  checkInputs();
});

function checkInputs(){
  //dùng để xóa tất cả những khoảng trắng ở đầu và cuối chuỗi.
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordCheckValue = passwordCheck.value.trim();
  
  if(usernameValue ===''){
    //show error 
    //add error class
    setErrorFor(username,'Username cannot be blank');
  }else{
    //add success class
    setSuccessFor(username);
  }
  
  if(emailValue ===''){
   
    setErrorFor(email, 'Email can not be blank');
  }else if(!isEmail(emailValue)){
    setErrorFor(email, 'Not a valid email');
  }else{
    //add success class
    setSuccessFor(email);
  }
  
 if(passwordValue ===''){
    setErrorFor(password, 'Password can not be blank');
  }else{
    //add success class
    setSuccessFor(password);
  }
  
 if(passwordCheckValue === ''){
     setErrorFor(passwordCheck,'Password does not match');
   
 }else if(passwordValue !== passwordCheckValue){
   setErrorFor(passwordCheck,'Passwords does not match');
   
  }else{
    //add success class
    setSuccessFor(passwordCheck);
  }

}

function setErrorFor(input,message){
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector('small');
  //add error message inside small;
  small.innerText = message;
  //add error class
  formControl.className ='form-control error';
}

function setSuccessFor(input,message){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}