
// active navbar 

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// hide nav
$(".nav-link").click(function(){
    $(".navbar-collapse").collapse("hide")
})




// counter design

document.addEventListener("DOMContentLoaded" , () => {
    function counter(id, start, end, duration ){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step= Math.abs(Math.floor(duration / range)),
        timer = setInterval(()=>{
            current += increment,
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0,2434,5656);
    counter("count2", 100,3434,7678);
    counter("count3", 435,1956,5876);
});

// gellery

$(document).ready(function () {

    $('.button').click(function () {

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if (filter == 'all') {
            $('.image').show(400);
        } else {
            $('.image').not('.' + filter).hide(200);
            $('.image').filter('.' + filter).show(400);
        }

    });

    $('.box').magnificPopup({

        delegate: 'a',
        type: 'image',
        box: {
            enabled: true
        }

    });

});


// contact page map 

// function getlocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showposition)}
//         else{
//             alert("geolocation is not supported in this browser")
//         }
//     }
//     function showposition(position){
//         alert('Latitude:'+ position.coords.latitude+'\n'+'longituide:'+position.coords.longitude);
//     }

	var div_map=document.getElementById("map-area");
// document.getElementById("map-area").style.display='block';
let latlng=new google.maps.LatLng(24.874888261113433, 66.98373661068196)

let map=new google.maps.Map(map-area,{
    center:latlng,
    zoom:16,
    maptypeid:'hybrid'
})

let marker=new google.maps.Marker({
    position:latlng,
    map:map,
    title:"lyari ",
    label:'A',
    draggable:true
})



//  login and registration form  


function ShowLoginForm(){
	
	SetTitle("Login");

	ShowHideForm("LoginFrom","Show");
	ShowHideForm("RegistrationFrom","Hide");
	ShowHideForm("ForgotPasswordForm","Hide");

	ActiveInactiveBtn("ShowLoginBtn","Active");
	ActiveInactiveBtn("ShowRegistrationBtn","Inactive");

	ShowHideFromSwitchBtn("Show");
};

function ShowRegistrationForm(){
	debugger;
	SetTitle("Registration");

	ShowHideForm("RegistrationFrom","Show");
	ShowHideForm("LoginFrom","Hide");
	ShowHideForm("ForgotPasswordForm","Hide");

	ActiveInactiveBtn("ShowLoginBtn","Inactive");
	ActiveInactiveBtn("ShowRegistrationBtn","Active");

	ShowHideFromSwitchBtn("Show");
};

function ShowForgotPasswordForm() {
	
	SetTitle("Forgot Password");

	ShowHideForm("RegistrationFrom","Hide");
	ShowHideForm("LoginFrom","Hide");
	ShowHideForm("ForgotPasswordForm","Show");

	ActiveInactiveBtn("ShowLoginBtn","Inactive");
	ActiveInactiveBtn("ShowRegistrationBtn","Inactive");
	ShowHideFromSwitchBtn("Hide");
}

function SetTitle(Title){
	var formTitle = document.getElementById('formTitle');
	formTitle.innerHTML = Title;
}

function ShowHideForm(FormID,ShowOrHide){
	var Form = document.getElementById(FormID);

	if(ShowOrHide == "Show"){
		Form.style.display = 'block';
	}else{
		Form.style.display = 'none';
	}
}

function ActiveInactiveBtn(ButtonID,ActiveORInactive) {
	debugger;
	var Button = document.getElementById(ButtonID);

	if(ActiveORInactive == "Active"){
		Button.classList.add('active');
	}else{
		Button.classList.remove('active');
	}
}

function ShowHideFromSwitchBtn(ShowOrHide) {
	var formSwitchBtn = document.getElementById('formSwitchBtn');
	if(ShowOrHide == 'Show'){
		formSwitchBtn.style.display = '';
	}else{
		formSwitchBtn.style.display = 'none';
	}
}

function registerMessegeShow (){
	
}

// end

// validation 

function ValidateLoginForm() {
	RemoveAllErrorMessage();

	var LoginEmail = document.getElementById('LoginEmail').value;
	var LoginPassword = document.getElementById('LoginPassword').value;
	var PasswordValidationMessage;
	var	emailValidationMessage;

	emailValidationMessage = isValidEmail(LoginEmail);
	if(emailValidationMessage != "valid"){
		ShowErrorMessage('LoginEmail',emailValidationMessage);
		return false;
	}
	
	PasswordValidationMessage = isValidPassword(LoginPassword);
	if(PasswordValidationMessage != "valid"){
		ShowErrorMessage('LoginPassword',PasswordValidationMessage);
		return false;
	}
	
	return true;
}

function ValidateRegistrationForm(){

	RemoveAllErrorMessage();

	var RegiName = document.getElementById('RegiName').value;
	var RegiEmailAddres = document.getElementById('RegiEmailAddres').value;
	var RegiPassword = document.getElementById('RegiPassword').value;
	var RegiConfirmPassword = document.getElementById('RegiConfirmPassword').value;

	var PasswordValidationMessage;
	var ConfirmPasswordMessage;
	var	emailValidationMessage;

	if(RegiName == ""){
		ShowErrorMessage('RegiName',"Please fill the filed.");
		return false;
	}else if(RegiName.length < 3 || RegiName.length > 20){
		ShowErrorMessage('RegiName',"Name should be minimum 3 and maximum 20 characters long.");
		return false;
	}

	emailValidationMessage = isValidEmail(RegiEmailAddres);

	if(emailValidationMessage != "valid"){
		ShowErrorMessage('RegiEmailAddres',emailValidationMessage);
		return false;
	}
	
	PasswordValidationMessage = isValidPassword(RegiPassword);
	if(PasswordValidationMessage != "valid"){
		ShowErrorMessage('RegiPassword',PasswordValidationMessage);
		return false;
	}
	
	ConfirmPasswordMessage = isValidPassword(RegiConfirmPassword);
	if(ConfirmPasswordMessage != "valid"){
		ShowErrorMessage('RegiConfirmPassword',ConfirmPasswordMessage);
		return false;
	}

	if(RegiPassword != RegiConfirmPassword){
		ShowErrorMessage('RegiConfirmPassword',"Password not match.");
		return false;
	}

	alert('You have Succesfully Registerd.')

	return true;
}


function ValidateForgotPasswordForm(){

	RemoveAllErrorMessage();

	var forgotPassEmail = document.getElementById('forgotPassEmail').value;
	
	var	emailValidationMessage;
	emailValidationMessage = isValidEmail(forgotPassEmail);

	if(emailValidationMessage != "valid"){
		ShowErrorMessage('forgotPassEmail',emailValidationMessage);
		return false;
	}
	alert('New password has been sent to your mail.')
}



function ValidateResetPasswordForm(){

	RemoveAllErrorMessage();

	var NewPassword = document.getElementById('NewPassword').value;
	var ConfirmNewPassword = document.getElementById('ConfirmNewPassword').value;

	var PasswordValidationMessage;
	var ConfirmPasswordMessage;
	
	PasswordValidationMessage = isValidPassword(NewPassword);
	if(PasswordValidationMessage != "valid"){
		ShowErrorMessage('NewPassword',PasswordValidationMessage);
		return false;
	}
	
	ConfirmPasswordMessage = isValidPassword(ConfirmNewPassword);
	if(ConfirmPasswordMessage != "valid"){
		ShowErrorMessage('ConfirmNewPassword',ConfirmPasswordMessage);
		return false;
	}

	if(NewPassword != ConfirmNewPassword){
		ShowErrorMessage('ConfirmNewPassword',"Password not match.");
		return false;
	}

	return true;
}

function RemoveAllErrorMessage(){

	var allErrorMessage = document.getElementsByClassName('error-message');
	var allErrorFiled = document.getElementsByClassName('error-input');
	var i;

	for(i=(allErrorMessage.length - 1); i>=0; i--){
		allErrorMessage[i].remove();
	}
	
	for(i=(allErrorFiled.length-1);i>=0;i--){
		allErrorFiled[i].classList.remove('error-input');
	}
}

function ShowErrorMessage(InputBoxID,Message){

	var InputBox = document.getElementById(InputBoxID);
	InputBox.classList.add('error-input');
	InputBox.focus();

	var ErrorMessageElement = document.createElement("p");
	ErrorMessageElement.innerHTML = Message;
	ErrorMessageElement.classList.add('error-message');
	ErrorMessageElement.setAttribute("id",InputBoxID+'-error');

	InputBox.parentNode.insertBefore(ErrorMessageElement, InputBox.nextSibling);
	
}

function isValidEmail(email){

	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if(email == ""){
		return "Please fill the field.";
	}

	if(emailRegex.test(email) == false){
		return "This is not a valid email.";
	}

	return "valid";
}

function isValidPassword(password) {
	
	const minLength = 8;
	const maxLength = 32;
	const letterNumberRegexSpecialChar = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

	if(password == ""){
		return "Please fill the field."
	}

	if (password.length < minLength || password.length > maxLength) {
		return "Password length should be minimum 8 & maximum 32 characters.";
	}

	if (!letterNumberRegexSpecialChar.test(password)) {
		return "Password should contain alphabetic, numeric and special characters.";
	}
	return "valid";
}



// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}