// Assignment code here
FullCharSet = "";
LowerCharSet = "abcdefghijklmnopqrstuvwxyz";
SpecCharSet = "~!@#$%^&*()_-+=`:;<>?,./{}[]|";
UpprCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
NubrCharSet = "1234567890";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Prompt for length of password minimum of 8, max of 128
var passwordLength = window.prompt("How many characters are in your password? Use numbers only.")
console.log(passwordLength)

if (passwordLength < 8) {
  console.log("Sorry, please make a longer password!");
}  
else if (passwordLength > 128) {
  console.log("Sorry, please make a shorter password!");
}
else {
  console.log("Duly Noted!")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    var length = passwordLength;

        // Adds Special Characters to the character set
        if (passwordSpecChara === "YES") {
        FullCharSet += SpecCharSet;
        }
        else {
        FullCharSet += "";
        }

        // Adds Capitalized Characters to the character set
        if (passwordCapitChara === "YES") {
          FullCharSet += UpprCharSet;
        }
        else {
          FullCharSet += "";
        }
        
        // Adds lower case characters to the character set
        if (passwordLowerChara === "YES") {
          FullCharSet += LowerCharSet;
        }
        else {
          FullCharSet += "";
        }

        // Adds numbers to the character set
        if (passwordNubrChara === "YES") {
          FullCharSet += NubrCharSet;
        }
        else {
          FullCharSet += "";
        }

        retVal = "";

        //Guaranteeing that each requirement is accounted for
        if (passwordSpecChara === "YES") {
          for (var i = 0, n = SpecCharSet.length; i < 1; ++i) {
            retVal += SpecCharSet.charAt(Math.floor(Math.random() * n));
          }
        }
        if (passwordCapitChara === "YES") {
          for (var i = 1, n = UpprCharSet.length; i < 2; ++i) {
            retVal += UpprCharSet.charAt(Math.floor(Math.random() * n));
          }
        }
        if (passwordLowerChara === "YES") {
          for (var i = 2, n = LowerCharSet.length; i < 3; ++i) {
            retVal += LowerCharSet.charAt(Math.floor(Math.random() * n));
          }
        }
        if (passwordNubrChara === "YES") {
          for (var i = 3, n = NubrCharSet.length; i < 4; ++i) {
            retVal += NubrCharSet.charAt(Math.floor(Math.random() * n));
          }
        }
        // Generates the password
        for (var i = 4, n = FullCharSet.length; i < length; ++i) {
        retVal += FullCharSet.charAt(Math.floor(Math.random() * n));
        }
    return retVal;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Decides whether we want special characters
var passwordSpecChara = window.prompt("Are there special characters in your password? Please type YES or NO.")
console.log(passwordSpecChara)
if (passwordSpecChara === "YES") {
  console.log("You have indicated that you want to use special characters!"); 
}
else if (passwordSpecChara === "NO") {
  console.log("You have indicated that special characters are not necessary.")
}
else {
  console.log("Oh you, you Joker you.")
}

// Decides whether we want capitalized characters
var passwordCapitChara = window.prompt("Are you using CAPITALIZED characters in your password? Please type YES or NO.")
console.log(passwordCapitChara)
if (passwordCapitChara === "YES") {
  console.log("You have indicated that you want to use capitalization!"); 
}
else if (passwordCapitChara === "NO") {
  console.log("You have indicated that capitalization is not necessary.")
}
else {
  console.log("Oh you, you Joker you.")
}

// Decides whether we want lowercase characters
var passwordLowerChara = window.prompt("Are there lower case characters in your password? Please type YES or NO.")
console.log(passwordLowerChara)
if (passwordLowerChara === "YES") {
  console.log("You have indicated that you want to use lower case characters!"); 
}
else if (passwordLowerChara === "NO") {
  console.log("You have indicated that lower case characters are not necessary.");
}
else {
  console.log("Oh you, you Joker you.");
}

// Decides whether we want numbers
var passwordNubrChara = window.prompt("Are there numbers in your password? Please type YES or NO.")
console.log(passwordNubrChara);
if (passwordNubrChara === "YES") {
  console.log("You have indicated that you want to use numbers!"); 
}
else if (passwordNubrChara === "NO") {
  console.log("You have indicated that numbers are not necessary.");
}
else {
  console.log("Oh you, you Joker you.");
}