// Assignment Code
var generateBtn = document.querySelector("#generate");
var chosenCount = generatePassword.passwordLength;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
writePassword()
// Add event listener to generate button
function generatePassword() {
  var passwordLength = prompt("What character length does your password need to be? (*At least 8 and no more than 128 characters.");
  console.log(passwordLength)
  if(passwordLength < 8) {
    alert("Must be more than 8 characters.");
  }


  // var confirmLength = alert(passwordLength + " characters.")
    // return("My password")
    

  //   console.log(passwordLength)
  // var passwordLowercase = confirm("Do you want any lowercase letters?");
  // var confirmLowercase = alert(passwordLowercase + " characters.")
  //   console.log(passwordLowercase)
  // var passwordUppercase = confirm("Do you want any uppercase letters?");

  //   console.log(passwordUppercase)
  // var passwordNumeric = confirm("Do you want any numbers?");

  //   console.log(passwordNumeric)
  // var passwordSpecial = confirm("Do you want any special characters?");

  //   console.log(passwordSpecial)
 
  
  // return "My password"
}

// generatePassword()

// this starts things off calling on function "writePassword"
generateBtn.addEventListener("click", writePassword);


