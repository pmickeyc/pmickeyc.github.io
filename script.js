//Padraig McCauley 20123744 HCOMPE1

//Show or hide the navigation menu links when the user clicks on the hamburger menu
function navToggle() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function hideNavPage() {
  var x = document.getElementById("myLinks");
  x.style.display = "none";
}

// runs stickyNav when user scrolls
window.onscroll = function() {stickyNav()};
// Get the navbar
var navbar = document.getElementById("navigationId");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//the functions for showing/hiding the text potrion in the gallery
function showText1(){
  var img = document.getElementById("img1");
  if(img.style.display === "block"){
    img.style.display = "none";
  }
  else{
    img.style.display = "block";
  }
}

function showText2(){
  var img = document.getElementById("img2");
  if(img.style.display === "block"){
    img.style.display = "none";
  }
  else{
    img.style.display = "block";
  }
}

function showText3(){
  var img = document.getElementById("img3");
  if(img.style.display === "block"){
    img.style.display = "none";
  }
  else{
    img.style.display = "block";
  }
}

function showText4(){
  var img = document.getElementById("img4");
  if(img.style.display === "block"){
    img.style.display = "none";
  }
  else{
    img.style.display = "block";
  }
}

function showText5(){
  var img = document.getElementById("img5");
  if(img.style.display === "block"){
    img.style.display = "none";
  }
  else{
    img.style.display = "block";
  }
}

function showText6(){
  var img = document.getElementById("img6");
  if(img.style.display === "block"){
    img.style.display = "none";
  }
  else{
    img.style.display = "block";
  }
}


//the form validator functions
var validFormMessage = false;
var validFormMobile = false;
var validFormEmail = false;
var mobileNum=[];
var userEmailArray=[];
var errorMessage = "Error: \n";

//mobile number validator
function mobileValidator(){
  let preArrayMobileNum = document.getElementById("userMobileNumber").value;

  for(i=0;i<preArrayMobileNum.length;i++){
    mobileNum[i] = preArrayMobileNum.charAt(i);
  }

  //number has to be 10 characters
  if(mobileNum.length==10){
    //first two numbers have to be 08
    if(mobileNum[0]== 0 && mobileNum[1] == 8){
      //third character has to be either 3,5,6 or 7
      if(mobileNum[2]===3 || mobileNum[2]==5 || mobileNum[2]==6 || mobileNum[2]==7){
        //if all is true then the number is valid
        validFormMobile = true;
      }
      else{
        //else the bool remains false/number is invalid
        validFormMobile = false;
      }
    }
    else{
      validFormMobile = false;
    }
  }
  else{
    validFormMobile = false;
  }

  //at the end of the function the error message string is updated if the bool is false/number is invalid
  if(validFormMobile == false){
    //the string is updated with each validator function so that a single alert message apears rather than several in a row 
    errorMessage +="-Mobile number is invalid: must be an Irish mobile number \n"
    // alert(errorMessage);
    return false;
  }
}

//message validator - cant be blank (done in the JS because the tet input box is a text area)
function messageValidator(){
  let userMessage = document.getElementById("userMessage").value;
  if(userMessage == ""){
    validFormMessage = false;
    errorMessage+="-Message field must not be empty \n"
    // alert("Message field must not be empty");
  }
  else{
    validFormMessage = true;
  }
}

//email validator
function emailValidator(){
  let preArrayEmail = document.getElementById("userEmail").value;

  for(i=0;i<preArrayEmail.length;i++){
    userEmailArray[i] = preArrayEmail.charAt(i);
  }
  //checking for a top-level domain of maximum four character length (searched for the . character - based off a list found here: https://www.letshost.ie/domain-name-registration/domain-pricing/
  if(userEmailArray[userEmailArray.length-3] == "." || userEmailArray[userEmailArray.length-4]== "." || userEmailArray[userEmailArray.length-5] =="." ){
    validFormEmail = true;
  }
  else{
    validFormEmail = false;
  }


  if(validFormEmail == false){
    errorMessage+="-Email is invalid: please include '.com', '.ie' or '.co.uk' etc";
    // alert('Email is invalid - check the top-level domain: .com, .ie, .co.uk etc');
    // alert(errorMessage);
    return false;
  }
}

//the main validator that checks runs all of the previous functions
function validator(){
  //setting the error message as a default at the start of every function cycle so that the old errors are overwritten
  errorMessage = "Error: \n";
  mobileValidator();
  messageValidator();
  emailValidator();

  if(validFormMobile == true && validFormMessage == true && validFormEmail == true){
    alert("Message received - we will be in touch shortly");
    document.getElementById("contactForm").reset();
    // document.getElementById("userMessage").value="";
    return true;
  }
  else{
    alert(errorMessage);
    return false;
  }
}