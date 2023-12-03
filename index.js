
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  confirmPassword = id('confirm_password'),
  address = id('address'),
  employD = id('checkbox'),
  phone = id('phone_number'),
  select = id('country'),
  noSelect = id("no-select"),
  form = id("form"),

  radioBtn = classes('radio'),
  optionSelect = classes('optionD'),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

/* table data*/
const output1 = document.getElementById("td1");
const output2 = document.getElementById("td2");
const output3 = document.getElementById("td3");
const output4 = document.getElementById("td4");

function showData(e) {
    e.preventDefault();
    if(username.value && email.value && password.value && phone.value){
        output1.innerText = username.value;
        output2.innerText = email.value;
        output3.innerText = password.value;
        output4.innerText = phone.value;
    }
    else{
        console.log(username.value);
    }  
}
/* FORM VALIDATION */
function isPasswordSecure(pass) {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(pass);
};


let engine = (id, classes, message) => {
    if(id.value === null || id.value ==='undefined'){
        console.log("data is null or undefined");
    }
    if (id.value.trim() === "") {
        errorMsg[classes].innerHTML = message;
        id.style.border = "2px solid red";
        failureIcon[classes].style.opacity = "1";
        successIcon[classes].style.opacity = "0";
    } 
    else {
        errorMsg[classes].innerHTML = "";
        id.style.border = "2px solid green";
        failureIcon[classes].style.opacity = "0";
        successIcon[classes].style.opacity = "1";
    }
}

function validateEmail(inputElement,classes,message){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailValue = inputElement.value.trim();
    if (emailRegex.test(emailValue)) {
        errorMsg[classes].innerHTML = "";
        inputElement.style.border = "2px solid green";
        failureIcon[classes].style.opacity = "0";
        successIcon[classes].style.opacity = "1";
    } else {
        errorMsg[classes].innerHTML = "Please enter valid Email";
        inputElement.style.border = "2px solid red";
        failureIcon[classes].style.opacity = "1";
        successIcon[classes].style.opacity = "0";
    }
}

let isPassword=(id, classes)=>{
    const password = id.value.trim();
    if(password === '')
    {
        engine(id,classes,"Password cannot be blank");
        id.style.border = "2px solid red";
        failureIcon[classes].style.opacity = "1";
        successIcon[classes].style.opacity = "0";
    }
    else if (!isPasswordSecure(password)) {
        errorMsg[classes].innerText='Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)';
        id.style.border = "2px solid red";
        failureIcon[classes].style.opacity = "1";
        successIcon[classes].style.opacity = "0";
    } else {
        errorMsg[classes].innerText ="";    
        id.style.border = "2px solid green";
        failureIcon[classes].style.opacity = "0";
        successIcon[classes].style.opacity = "1";
    }
}

let checkConfirmPassword = (id1, id2, classes) => {
    const password = id1.value.trim();
    const confirmPassword = id2.value.trim();
    if(confirmPassword === '')
    {
        engine(id2,classes,"Password cannot be blank");
        id2.style.border = "2px solid red";
        failureIcon[classes].style.opacity = "1";
        successIcon[classes].style.opacity = "0";
    }
    else if (password != confirmPassword) {
        errorMsg[classes].innerText='Confirm password does not match';
        id2.style.border = "2px solid red";
        failureIcon[classes].style.opacity = "1";
        successIcon[classes].style.opacity = "0";
    } else {
        errorMsg[classes].innerText ="";
        id2.style.border = "2px solid green";
        failureIcon[classes].style.opacity = "0";
        successIcon[classes].style.opacity = "1";
    }
};


let checkbox = (input, classes, message)=>{
    if(input.checked == false ){
        errorMsg[classes].innerText = message;
        input.style.border = "2px solid red";
        failureIcon[classes].style.opacity = "1";
        successIcon[classes].style.opacity = "0";   
    }
    else{
        errorMsg[classes].innerText ="";
        input.style.border = "2px solid green";
        failureIcon[classes].style.opacity = "0";
        successIcon[classes].style.opacity = "1";   
    }
}

let isContact = (number,classes)=>{
    if(number.value.trim() === ""){
        engine(number,classes,"Phone number can not be blank");
    }
    else if(number.value.length < 10 || number.value.length > 10 ){ 
        errorMsg[classes].innerText = "Enter valid phone number";
        number.style.border = "2px solid red";
        failureIcon[classes].style.opacity = "1";
        successIcon[classes].style.opacity = "0";
    }
    else{       
        errorMsg[classes].innerText ="";
        number.style.border = "2px solid green";
        failureIcon[classes].style.opacity = "0";
        successIcon[classes].style.opacity = "1";
    }
}

let isRadioButtonChecked = (x, classes) => {
    var selectedValue =document.querySelector('input[name="gender"]:checked');
      if(selectedValue == null){
        errorMsg[classes].innerText = "Please select the gender";   
        x.style = "2px solid red";
        failureIcon[classes].style.opacity = "1";
        successIcon[classes].style.opacity = "0";       
    }
    else if(selectedValue){
        errorMsg[classes].innerText = "";   
        x.style = "2px solid green";
        failureIcon[classes].style.opacity = "0";
        successIcon[classes].style.opacity = "1";
    }
}

let isCountry = (select, classes) =>{
    if(select.value == "ca" || select.value=="us" || select.value == "uk" || select.value == "in"){
        errorMsg[classes].innerText = ""; 
        select.style.border = "2px solid green";
        failureIcon[classes].style.opacity = "0";
        successIcon[classes].style.opacity = "1";
    }
    else{
        errorMsg[classes].innerText ="Please select your country";
        select.style.border = "2px solid red";
        failureIcon[classes].style.opacity = "1";
        successIcon[classes].style.opacity = "0";
    }
}

function myFunction(){
    engine(username, 0, "Username cannot be blank");
}
    
function myFunction2(){
    validateEmail(email, 1, "Email cannot be blank");
}

function myFunction3(){
    isPassword(password,2,"Password doesn't match");
}

function myFunction4(){
    checkConfirmPassword(password,confirmPassword,3);
}

function myFunction5(){  
    engine(address,4,"Please enter your address");  
}

// function myFunction6(){
//     checkbox(employD, 5,"Mark the field");
// }

function myFunction7(){
    isContact(phone,5);
}

function myFunction8(){
    isRadioButtonChecked(radioBtn,6); 
}

function myFunction9(){
    isCountry(select, 7);
}

function myFunction6(){
    checkbox(employD, 8,"Mark the field");
}

form.addEventListener("submit", (e) => {
    engine(username, 0, "Username cannot be blank");
    validateEmail(email, 1, "Email cannot be blank");
    isPassword(password,2,"Password doesn't match");
    checkConfirmPassword(password,confirmPassword,3);
    engine(address,4,"Please enter your address");
    isContact(phone,5);
    isRadioButtonChecked(radioBtn,6);
    isCountry(select, 7);
    checkbox (employD, 8,"Please agree to the terms and conditions.");
});

form.addEventListener("submit", showData);