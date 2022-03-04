// Assignment code here
FullCharSet = "";
LowerCharSet = "abcdefghijklmnopqrstuvwxyz";
SpecCharSet = "~!@#$%^&*()_-+=`:;<>?,./{}[]|";
UpprCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
NubrCharSet = "1234567890";
var passwordLength = '';
var passwordSpecChara = '';
var passwordCapitChara = '';
var passwordLowerChara = '';
var passwordNubrChara = '';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var promptBtn = document.querySelector("#prompt");

var parameters = function() {
  // Prompt for length of password minimum of 8, max of 128
passwordLength = window.prompt("How many characters are in your password? Use numbers only.")
console.log(passwordLength);

// Decides whether we want special characters
passwordSpecChar = window.prompt("Are there special characters in your password? Please type YES or NO.")
passwordSpecChara = passwordSpecChar.toUpperCase();
console.log(passwordSpecChara);

// Decides whether we want capitalized characters
passwordCapitChar = window.prompt("Are you using CAPITALIZED characters in your password? Please type YES or NO.");
passwordCapitChara = passwordCapitChar.toUpperCase();
console.log(passwordCapitChara);

// Decides whether we want lowercase characters
passwordLowerChar = window.prompt("Are there lower case characters in your password? Please type YES or NO.");
passwordLowerChara = passwordLowerChar.toUpperCase();
console.log(passwordLowerChara);

// Decides whether we want numbers
passwordNubrChar = window.prompt("Are there numbers in your password? Please type YES or NO.");
passwordNubrChara = passwordNubrChar.toUpperCase();
console.log(passwordNubrChara);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    var length = passwordLength;
    FullCharSet = FullCharSet.replace("~!@#$%^&*()_-+=`:;<>?,./{}[]|", '');
    FullCharSet = FullCharSet.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", '');
    FullCharSet = FullCharSet.replace("abcdefghijklmnopqrstuvwxyz", '');
    FullCharSet = FullCharSet.replace("1234567890", '');

        // Adds Special Characters to the character set
        if (passwordSpecChara == "YES") {
        FullCharSet += SpecCharSet;
        }
        else if (passwordSpecChara == "NO") {
          FullCharSet = FullCharSet.replace("~!@#$%^&*()_-+=`:;<>?,./{}[]|", '');
        }
        else {
        FullCharSet += "";
        }

        // Adds Capitalized Characters to the character set
        if (passwordCapitChara == "YES") {
          FullCharSet += UpprCharSet;

        }
        else if (passwordCapitChara == "NO") {
          FullCharSet = FullCharSet.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", '');
        }
        else {
          FullCharSet += "";
        }
        
        // Adds lower case characters to the character set
        if (passwordLowerChara == "YES") {
          FullCharSet += LowerCharSet;
        }
        else if (passwordLowerChara == "NO") {
          FullCharSet = FullCharSet.replace("abcdefghijklmnopqrstuvwxyz", '');
        }
        else {
          FullCharSet += "";
        }

        // Adds numbers to the character set
        if (passwordNubrChara == "YES") {
          FullCharSet += NubrCharSet;
        }
        else if (passwordNubrChara == "NO") {
          FullCharSet = FullCharSet.replace("1234567890", '');
        }
        else {
          FullCharSet += "";
        }

        retVal = "";

        //Guaranteeing that each requirement is accounted for
        if (passwordSpecChara == "YES") {
          for (var i = 0, n = SpecCharSet.length; i < 1; ++i) {
            retVal += SpecCharSet.charAt(Math.floor(Math.random() * n));
          }
        }
        if (passwordCapitChara == "YES") {
          for (var i = 1, n = UpprCharSet.length; i < 2; ++i) {
            retVal += UpprCharSet.charAt(Math.floor(Math.random() * n));
          }
        }
        if (passwordLowerChara == "YES") {
          for (var i = 2, n = LowerCharSet.length; i < 3; ++i) {
            retVal += LowerCharSet.charAt(Math.floor(Math.random() * n));
          }
        }
        if (passwordNubrChara == "YES") {
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

parameters();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
promptBtn.addEventListener("click", parameters);
