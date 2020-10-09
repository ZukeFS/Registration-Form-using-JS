//Selecting divs
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

//add event
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})

//final successfull message function
const sendData = (usernameVal, sRate, count) => {
    if(sRate === count){
        alert('Registration successfull.. :D');
        swal("Welcome! " + usernameVal, "Registration Successfull", "success");
        location.href = `login.html?username=${usernameVal}`;
    }
}

//for final data validation
const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    var count =  formCon.length - 1;
    for(var i=0; i<formCon.length; i++){
        if(formCon[i].className === "form-control success"){
            var sRate = 0+i;
            sendData(usernameVal, sRate, count); 
        }
        else{
            return false;
        }
    }
}

//valid email or not function
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;
    
    var dot = emailVal.lastIndexOf(".");
    if(dot <= atSymbol + 3) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}

//define validate function
const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    
    //validate username
    if(usernameVal === ""){
        setErrorMsg(username, 'Username cannot be blank!');
    }
    else if(usernameVal.length <= 2){
        setErrorMsg(username, 'Username should be atleast 3 characters');
    }
    else{
        setSuccessMsg(username);
    }

    //validate email
    if(emailVal === ""){
        setErrorMsg(email, 'Email cannot be blank');
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, 'Not a valid Email..');
    }
    else{
        setSuccessMsg(email);
    }

    //validate phone
    if(phoneVal === ""){
        setErrorMsg(phone, 'Phone cannot be blank!');
    }
    else if(phoneVal.length != 10){
        setErrorMsg(phone, 'Not a valid Phone number');
    }
    else{
        setSuccessMsg(phone);
    }

    //validate password
    if(passwordVal === ""){
        setErrorMsg(password, 'Password cannot be blank!');
    }
    else if(passwordVal.length <= 5){
        setErrorMsg(password, 'Password should be atleast 5 characters');
    }
    else{
        setSuccessMsg(password);
    }

    //validate confirm password
    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'Password cannot be blank!');
    }
    else if(passwordVal != cpasswordVal){
        setErrorMsg(cpassword, 'Password does not match..');
    }
    else{
        setSuccessMsg(cpassword);
    }
    
    successMsg(usernameVal);
}

//defining error message function
function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

//defining success message function
function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}