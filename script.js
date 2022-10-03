// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = " !#$%&'()*+,-./:;<=>?@]/^_`{|}~";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXY";
var lowerCases = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


// Prompts that come up after you click generate password
function generatePassword() {
  while (true) {
    let passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
      if (passwordLength >=8 && passwordLength <= 128) {
        break;
      } else {
        prompt("Please enter the number of characters between 8 and 128");
      }
  }

  while (true) {
    let numbers = prompt("Do you want numbers? (y/n)");
      if (numbers === "y") {
        numbers = "1234567890";
        alert("Numbers will be included");
        break;
      } else if (numbers === "n") {
        numbers = "";
        alert("Numbers will not be included");
        break;
      } else {
        prompt("Do you want numbers? (y/n)");
      }
  }

  while (true) { 
  let lowerCases = prompt("Do you want lower cases? (y/n)");
    if (lowerCases === "y") {
      lowerCases = "abcdefghijklmnopqrstuvwxyz";
      alert("lowerCases will be included");
      break;
    } else if (lowerCases === "n") {
      lowerCases = "";
      alert("lowerCases will not be included");
      break;
    } else if (lowerCases !== "y"||"n"){
      alert("This is wrong selection. Enter y or n", "y/n");
    }
  }

  while (true) {
  let upperCases = prompt("Do you want uppercases? (y/n)");
    if (upperCases === "y") {
      upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXY";
      alert("Uppercases will be included");
      break;
    } else if (upperCases === "n") {
      upperCases = "";
      alert("Uppercases will not be included");
      break;
    } else if (upperCases !== "y"||"n"){
      alert("This is wrong selection. Enter y or n", "y/n");
    }
  }

  while(true) {
  let specialCharacters = prompt("Do you want special characters? (y/n)");
    if (specialCharacters === "y") {
      specialCharacters = " !#$%&'()*+,-./:;<=>?@]/^_`{|}~";
      alert("Special characters will be included");
      break;
    } else if (specialCharacters === "n") {
      specialCharacters = "";
      alert("Special characters will not be included");
      break;
    } else if (specialCharacters !== "y"||"n") {
      alert("This is wrong selection. Enter y or n", "y/n");
    }
  }

  // To verify values are correctly selected --
  //console.log(passwordLength, numbers, lowerCases, upperCases, specialCharacters);

  var totalCharacters = ''.concat(numbers, lowerCases, upperCases, specialCharacters);

  // to make sure characters are correctly selected --
  console.log(totalCharacters);

  // generate random password

  var result = "";

  for (var i = 0; i < passwordLength; i++) {
      var randomPass = Math.floor(Math.random() * totalCharacters.length);
      result += totalCharacters.substring(randomPass, randomPass+1);
  }
  
  return result;

} 

