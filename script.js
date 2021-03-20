// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
function generatePassword() {
  var passwordLength = prompt("What character length does your password need to be?");
  var passwordLowercase = confirm("Do you want any lowercase letters?");
  var passwordUppercase = confirm("Do you want any uppercase letters?");
  var passwordNumeric = confirm("Do you want any numbers?");
  var passwordSpecial = confirm("Do you want any special characters?");
  console.log(passwordLowercase)
  return "My password"
}

// this starts things off calling on function "writePassword"
generateBtn.addEventListener("click", writePassword);


