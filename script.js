// Assignment Code
var generateBtn = document.querySelector("#generate");
var chosenCount = generatePassword.passwordLength;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("How many characters do you want your password to contain?");
  console.log(passwordLength)
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password cannot be less than 8 characters or greater than 128 characters")
    prompt("How many characters do you want your password to contain?")
  } 

  var passwordLowercase = confirm("Do you want any lowercase letters?");
  console.log(passwordLowercase)
 
  var passwordUppercase = confirm("Do you want any uppercase letters?");
   console.log(passwordUppercase)
 
  var passwordNumeric = confirm("Do you want any numbers?");
   console.log(passwordNumeric)
 
  var passwordSpecial = confirm("Do you want any special characters?");
  console.log(passwordSpecial)
}

// this starts things off calling on function "writePassword"
