const sliderInputEl = document.getElementById("passwordSizeInput");
var numberOfRequiredCharacters = sliderInputEl.value;
const sliderCharactersCountEl = document.getElementById(
  "sliderCharactersCount"
);

//here the code updated the numberOfRequiredCharacters and sliderCharactersCount txt based when the slider changes
sliderInputEl.addEventListener("input", function () {
  numberOfRequiredCharacters = sliderInputEl.value;
  sliderCharactersCountEl.textContent = sliderInputEl.value;
});

//this function checks if the uppercaseLettersCheckbox is checked
function checkIfUppercaseLettersRequired() {
  const uppercaseLettersCheckboxEl = document.getElementById(
    "capitalLettersCheckbox"
  );
  return uppercaseLettersCheckboxEl.checked;
}

//returns the password characters that can be generated from
function returnPasswordRequiredCharacters() {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  var passwordRequiredCharacters = lowercase;

  if (checkIfUppercaseLettersRequired()) {
    passwordRequiredCharacters += uppercase;
  }

  return passwordRequiredCharacters;
}

//todo: check if the password should contains numbers
//todo: check if the password should contains symbols

// todo : generate a password
//generate the password based on the number of charcters based on the slider
function generatePassword() {
  const passwordNumberCharacters = numberOfRequiredCharacters;
  const PasswordWholeCharacters = returnPasswordRequiredCharacters();

  for (var i = 0; i < passwordNumberCharacters; i++) {
    
  }
}

const generatePasswordBtnEl = document.getElementById("generatePasswordButton");
generatePasswordBtnEl.addEventListener("click", function () {
  generatePassword();
});
