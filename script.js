var charaLength = 8;
var Choice = [];

var specialChara = ['!','@','#','$','%','^','&','*','(',')','[',']',';','"','>','<','?','|'];
var lowerCase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var upperCase = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var numbers = ['0','9','8','7','6','5','4','3','2','1'];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var answeredPrompts = userPrompt();

  if (answeredPrompts) {
    var geniePassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = geniePassword;
  
  }  

}

function generatePassword() {
// Generate based off prompts
    var password = "";
    for(var i = 0; i < charaLength; i++) {
        var randomLetter = Math.floor(Math.random() * Choice.length);
        password = password + Choice[randomLetter];
    }
    return password;
}

function userPrompt(){

  Choice = [];

  charaLength = parseInt(prompt('How many characters would you like your password to be? (8 - 128 Characters'));

  if (isNaN(charaLength) || charaLength < 8 || charaLength > 120) {
    alert("Character length needs to be, 8 - 128 . Please try again.");
    return false;
  }

  if(confirm('would you like lowercase letters in your password?')) {
    Choice = Choice.concat(lowerCase);
  }
  if(confirm('would you like uppercase letters in your password?')) {
    Choice = Choice.concat(upperCase);
  }
  if(confirm('would you like special characters in your password?')) {
    Choice = Choice.concat(specialChara);
  }
  if(confirm('would you like numbers in your password?')) {
    Choice = Choice.concat(numbers);
  }
  return true;
}

