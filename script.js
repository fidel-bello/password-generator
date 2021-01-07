// Assignment Code
var generateBtn = document.querySelector("#generate");
//arrays
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//console.log(numeric, special, lower, upper)
//declarations
var confirmLength = "";
var confirmUpper;
var confirmLower;
var confirmSpecial;
var confirmNumeric;
//added prompts
function generatePassword () {
  var pwdOut= [];
  var passwordString = "";
  var confirmLength = parseInt(prompt("how many? at least 8 and no more than 128"));
  /*if(confirmLength <= 7 || confirmLength >= 129) {
    alert("must be between 8-128!");
    var confirmLength = parseInt(prompt("how many characters?"));
  }*/
    alert(`your password will contain ${confirmLength} characters`);
    //added confirm prompts for criteria of the password
    confirmUpper= confirm("would you like uppercase letters?");
    confirmLower= confirm("would you like lower case letters?");
    confirmSpecial= confirm("would you like special characters?");
    confirmNumeric= confirm("would you like numbers?");
    //added loop for canceled variables, user must retry
    /*while (confirmUpper== false && confirmLower== false && confirmSpecial== false && confirmNumeric== false ) {
      alert("it is recommended to at least use one of the given criteria");
      confirmUpper= confirm("would you like uppercase letters?");
      confirmLower= confirm("would you like lower case letters?");
      confirmSpecial= confirm("would you like special characters?");
      confirmNumeric= confirm("would you like numbers?");
    }*/
    //stored array into selected characters
    if (confirmUpper=== true){
      for (var i = 0; i < upper.length; i++){
        pwdOut.push(upper[i]);
    }
      
  }
    if (confirmLower===true){
      for (var i= 0; i < lower.length; i++){
      pwdOut.push(lower[i]);
      }
    }
    if (confirmSpecial===true){
      for (var i=0; i < special.length;i++){

      pwdOut.push(special[i]);
      }
    }
    if (confirmNumeric===true){
      for(var i= 0; i < numeric.length; i++){
      pwdOut.push(numeric[i]);
      }
    }

   for (var i = 0; i < parseInt(confirmLength); i++){
    passwordString += pwdOut[Math.floor(Math.random()* pwdOut.length)]
   }
  console.log(passwordString);
    return passwordString;
  }

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password")
  passwordText.value= password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
