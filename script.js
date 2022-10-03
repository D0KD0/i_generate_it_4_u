// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

var specialCharacters = " !#$%&'()*+,-./:;<=>?@]/^_`{|}~";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXY";
var lowerCases = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";

// Prompts that come up after you click generate password
function generatePassword() {

  let passwordLength = prompt("Please enter the number of characters between 8 and 128");
    if (passwordLength < 8 || passwordLength >128) {
      alert("This is out of range. Number of characters should be between 8 and 128.", "enter between 8 and 128");
    } else if (passwordLength >= 8 && passwordLength <= 128) {
      alert("Character length has been selected");
    }
  let numbers = prompt("Do you want numbers? (y/n)");
    if (numbers === "y") {
      numbers = "1234567890";
      alert("Numbers will be included");
    } else if (numbers === "n") {
      numbers = "";
      alert("Numbers will not be included");
    } else {
      alert("This is wrong selection. Enter y or n", "y/n")
    }
    
  let lowerCases = prompt("Do you want lower cases? (y/n)");
    if (lowerCases === "y") {
      lowerCases = "abcdefghijklmnopqrstuvwxyz";
      alert("lowerCases will be included");
    } else if (lowerCases === "n") {
      lowerCases = "";
      alert("lowerCases will not be included");
    } else {
      alert("This is wrong selection. Enter y or n", "y/n")
    }

  let upperCases = prompt("Do you want uppercases? (y/n)");
    if (upperCases === "y") {
      upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXY";
      alert("Uppercases will be included");
    } else if (upperCases === "n") {
      upperCases = "";
      alert("Uppercases will not be included");
    } else {
      alert("This is wrong selection. Enter y or n", "y/n")
    }

  let specialCharacters = prompt("Do you want special characters? (y/n)");
    if (specialCharacters === "y") {
      specialCharacters = " !#$%&'()*+,-./:;<=>?@]/^_`{|}~";
      alert("Special characters will be included");
    } else if (specialCharacters === "n") {
      specialCharacters = "";
      alert("Special characters will not be included");
    } else {
      alert("This is wrong selection. Enter y or n", "y/n")
    }
  
  console.log(passwordLength, numbers, lowerCases, upperCases, specialCharacters);

  var totalCharacters = ''.concat(numbers, lowerCases, upperCases, specialCharacters);

  console.log(totalCharacters);
