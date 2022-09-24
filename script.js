// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var promptBtn = document.querySelector("#prompt");
var passwordBoxEl = document.getElementById('password');

//parameters asked for here
const params = () => {
  paramvalues = [];

  //length
  lengthQ = window.prompt('How many characters are in your password? Enter a number between 8 and 32, please.');
  length = Number(lengthQ);
  if (/([0-9])/.test(lengthQ) == true && 8 <= length && length <= 32) { // tests to see if the input is true
      console.log(`Your password will be ${lengthQ} characters long`);
      paramvalues.push({'length': length});
  } 
  else {
      paramvalues.push({'length': 'invalid input'});
      error();
  }

  //spec chara
  specQ = window.prompt('Are there special characters in your password? Please type YES or NO.');
  spec = specQ.toUpperCase();
  if (spec == 'YES') {
      console.log('You want special characters in your password');
      paramvalues.push({'spec': true});
  }
  else if (spec == 'NO') {
      console.log('You do not want special characters in your password');
      paramvalues.push({'spec': false});
  }
  else {
      paramvalues.push({'spec': 'invalid input'});
      error();
  }

  //cap chara
  capQ = window.prompt('Are there CAPITALIZED characters in your password? Please type YES or NO.');
  cap = capQ.toUpperCase();
  if (cap == 'YES') {
      console.log('You want capitalized characters in your password');
      paramvalues.push({'cap': true});
  }
  else if (cap == 'NO') {
      console.log('You do not want capitalized characters in your password');
      paramvalues.push({'cap': false});
  }
  else {
      paramvalues.push({'cap': 'invalid input'});
      error();
  }

  //low chara
  lowQ = window.prompt('Are there lower case characters in your password? Please type YES or NO.');
  low = lowQ.toUpperCase();
  if (low == 'YES') {
      console.log('You want lower case characters in your password');
      paramvalues.push({'low': true});
  }
  else if (low == 'NO') {
      console.log('You do not want lower case characters in your password');
      paramvalues.push({'low': false});
  }
  else {
      paramvalues.push({'low': 'invalid input'});
      error();
  }

  //nums
  numQ = window.prompt('Are there numbers in your password? Please type YES or NO.');
  num = numQ.toUpperCase();
  if (num == 'YES') {
      console.log('You want numbers in your password');
      paramvalues.push({'num': true});
  }
  else if (num == 'NO') {
      console.log('You do not want numbers in your password');
      paramvalues.push({'num': false});
  }
  else {
      paramvalues.push({'num': 'invalid input'});
      error();
  }

  return check(paramvalues);
};

//checks is password possible & no invalid inputs
const check = () => {
if (paramvalues[0].length == 'invalid input' || paramvalues[1].spec == 'invalid input' || paramvalues[2].cap == 'invalid input' || paramvalues[3].low == 'invalid input' || paramvalues[4].num == 'invalid input') {
  window.alert('Invalid input detected! Please re-enter the requirements again!');
}
else if (paramvalues[1].spec == false && paramvalues[2].cap == false && paramvalues[3].low == false && paramvalues[4].num == false) {
  window.alert('No characters available for the password!');
}
else {
  createPassword();
}
};

//generate password fxn
const createPassword = () => {
  var charset = [];
  var trueCheck = 0; // tracks how many specs are true
  var str = '';

  //individual checks to add the type to the charset & guarantee a character in the string is of said type
  if (paramvalues[1].spec == true) {
    specChar = '~!@#$%^&*()_-+=`:;<>?,./{}[]|",';
    charset.push(specChar);
    str += specChar.charAt(Math.floor(Math.random() * specChar.length));
    trueCheck++;
  }
  if (paramvalues[2].cap == true) {
    capChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    charset.push(capChar);
    str += capChar.charAt(Math.floor(Math.random() * capChar.length));
    trueCheck++;
  }
  if (paramvalues[3].low == true) {
    lowChar = 'abcdefghijklmnopqrstuvwxyz';
    charset.push(lowChar);
    str += lowChar.charAt(Math.floor(Math.random() * lowChar.length));
    trueCheck++;
  }
  if (paramvalues[4].num == true) {
    numChar = '1234567890';
    charset.push(numChar);
    str += numChar.charAt(Math.floor(Math.random() * numChar.length));
    trueCheck++;
  }

  //remaining characters in the str generated here
  for (i=0; i<length-trueCheck; i++) {
    category = Math.floor(Math.random() * trueCheck);
    str += charset[category].charAt(Math.floor(Math.random()*charset[category].length));
  }
  
  //sets the placeholder value of the passwordBoxEl to the output str
  passwordBoxEl.placeholder = str;
}

const error = () => {
  throw new Error('invalid input!');
}

//calls up the params fxn, then generates a password on startup of the webpage
params();


// Add event listener to generate button
generateBtn.addEventListener("click", check);
promptBtn.addEventListener("click", params);
