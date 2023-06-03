// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passString = "";
  var passArray = [];
  var passLength = 0;
  var characterSet = [];
  var charIndex = 0;
  var charIndexCopy = 0;
  var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



  passLength = prompt("how long would you like your password to be? (input a number between 8 and 128");
  while(passLength < 8 || passLength > 128)
  {
    passLength = prompt("please input a valid number between 8 and 128");
  }


  if(confirm("do you want uppercase letter?")== true){
    for(i= charIndex; i< charIndexCopy + upperChar.length; i++){
      characterSet[i] = upperChar[i-charIndexCopy]; 

      charIndex = i;
    }
    charIndexCopy = charIndex;
  }

  /*
  if(confirm("do you want lowercase letter?")== true){
    for(i=0; i<lowerChar.length; i++){
      characterSet[i+charIndex] = lowerChar[i]; 
    }
  }

  if(confirm("do you want numerical characters?")== true){

  }

  if(confirm("do you want special characters?")== true){

  }
*/


  for(i=0;i<passLength;i++){
    passArray[i] = characterSet[Math.floor(Math.random()*passLength)];
    passString = passString + passArray[i];
  }

  /*
  password.innerHTML = passArray;
  passwordBox.appendChild(password);
  */
  return passString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
