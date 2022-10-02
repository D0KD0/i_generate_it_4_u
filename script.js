// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Character configuration
const specialCharacters = " !#$%&'()*+,-./:;<=>?@]/^_`{|}~";
const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXY";
const lowerCases = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const totalCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !#$%&'()*+,-./:;<=>?@]/^_`{|}~"

generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button

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
      alert("Numbers will be included");
    } else if (numbers === "n") {
      alert("Numbers will not be included");
    } else {
      alert("This is wrong selection. Enter y or n", "y/n")
    }
    
  let lowerCases = prompt("Do you want lower cases? (y/n)");
    if (lowerCases === "y") {
      alert("lowerCases will be included");
    } else if (lowerCases === "n") {
      alert("lowerCases will not be included");
    } else {
      alert("This is wrong selection. Enter y or n", "y/n")
    }

  let upperCases = prompt("Do you want uppercases? (y/n)");
    if (upperCases === "y") {
      alert("Uppercases will be included");
    } else if (upperCases === "n") {
      alert("Uppercases will not be included");
    } else {
      alert("This is wrong selection. Enter y or n", "y/n")
    }

  let specialCharacters = prompt("Do you want special characters? (y/n)");
    if (specialCharacters === "y") {
      alert("Special characters will be included");
    } else if (specialCharacters === "n") {
      alert("Special characters will not be included");
    } else {
      alert("This is wrong selection. Enter y or n", "y/n")
    }
    
  // Generator functions**
  totalCharacters = generatePassword(); 
    if (numbers === "y") {
      
    }
    



}