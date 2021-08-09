var form = document.forms["myForm"];
var errorName = document.getElementById("errorName");
var errorAddress = document.getElementById("errorAddress");
var errorMobile = document.getElementById("errorMobile");
var errorMessage = document.getElementById("errorMessage");
function formValidation(){
  var name = form.name.value;
  var address = form.address.value;
  var mobile = form.mobile.value;
  var message = form.message.value;
  if(validateInput(name,address,mobile)){
      alert("Form submitted");
  }else{
    alert("There was issue submitting form");
}}
function validateInput(name,address,mobile){
    var boolean;
    if(name.length<2){
        errorName.innerText="Please check your name should be 2 or more char";
        return false;
    }else{
        errorName.innerText="";
      boolean= true;
    }
    if(address.length<2){
        errorAddress.innerText ="Please check your address should be 2 or more char";
        return false;
    }else{
        errorAddress.innerText ="";
      boolean = true;
    }
    if(!mobile.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) && ! (mobile.match(/0{5,}/))){
        errorMobile.innerText = "Please check Mobile is not valid";
        return false;
    }else{
        errorMobile.innerText ="";
      boolean = true;
    }
    return boolean; 
}
