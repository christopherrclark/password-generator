// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberOfChars;
var okToUseSpecialChars;
var okToUseNumeric;
var okToUseLowercase;
var okToUseuppercase;
var massArray
var finalPassword = "";
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", "(", "_", "-", "+", "=", "{", "}", "[", "]", "|", ";", ":", "<", ",", ">", ".", "?", "/",];



// use global variables to list out all possible:
   // special characters
   // lower case letters 
   // upper case letters 
   // numbers 

function askQuestions(){
  var response = prompt("How many characters?");
  numberOfChars = parseInt(response);
  if(numberOfChars < 8 || numberOfChars > 128){
    alert("Your password must be between 8 and 128 characters.");
    askQuestions() 
  } else {
    okToUseSpecialChars = confirm("Do you want to use special characters?");
    okToUseNumeric = confirm("Do you want to use numeric?");
    okToUseLowercase = confirm("Do you want to use lowercase?");
    okToUseUppercase = confirm("Do you want to use uppercase?");
  }
  if(okToUseSpecialChars == false && okToUseNumeric == false && okToUseLowercase == false && okToUseUppercase){
    alert("you must make a selection");
    askQuestions()
  }
}

function createPassword(){

  if(okToUseSpecialChars){

  }
}











// use a loop to grab a random characters x number of times

//   finalPassword += 



// Your work starts here
function generatePassword(){
  askQuestions();

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);