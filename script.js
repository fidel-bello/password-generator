// Assignment Code
var generateBtn = document.querySelector("#generate");
//created even listener for the generate btn
generateBtn.addEventListener ('click', generatePassword);
//arrays
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//console.log(numeric, special, lower, upper)
//declarations
var confirmLength = ""
var confirmUpper;
var confirmLower;
var confirmSpecial;
var confirmNumeric;

function generatePassword () {
  var confirmLength = (prompt("how many? at least 8 and no more than 128"))
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function writePassword(legnth, upper, lower, numeric, special){

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);