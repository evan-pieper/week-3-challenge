// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordBox = document.getElementById("password");
  var password = document.createElement("p");
  var passLength = 0;
  var characterSet = 0;
  passwordBox.appendChild(password);
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
