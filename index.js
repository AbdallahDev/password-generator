const sliderInputEl = document.getElementById("passwordSizeInput");
var numberOfRequiredCharacters = sliderInputEl.value;
const sliderCharactersCountEl = document.getElementById(
  "sliderCharactersCount"
);
const generatePasswordTxtEl = document.getElementById("generatePasswordTxt");
const generatePasswordBtnEl = document.getElementById("generatePasswordButton");
const uppercaseLettersCheckboxEl = document.getElementById(
  "capitalLettersCheckbox"
);
const numbersCheckboxEl = document.getElementById("numbersCheckbox");
const symbolsCheckboxEl = document.getElementById("symbolsCheckbox");

//here the code updated the numberOfRequiredCharacters and sliderCharactersCount txt based when the slider changes
sliderInputEl.addEventListener("input", function () {
  numberOfRequiredCharacters = sliderInputEl.value;
  sliderCharactersCountEl.textContent = sliderInputEl.value;
});

//returns the password characters that can be generated from
function returnPasswordRequiredCharacters() {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  var passwordRequiredCharacters = lowercase;

  if (uppercaseLettersCheckboxEl.checked) {
    passwordRequiredCharacters += uppercase;
  }
  if (numbersCheckboxEl.checked) {
    passwordRequiredCharacters += numbers;
  }
  if (symbolsCheckboxEl.checked) {
    passwordRequiredCharacters += symbols;
  }

  return passwordRequiredCharacters;
}

//todo: check if the password should contains numbers
//todo: check if the password should contains symbols

// todo : generate a password
//generate the password based on the number of charcters based on the slider
function generatePassword() {
  const passwordNumberCharacters = numberOfRequiredCharacters;
  const passwordWholeCharacters = returnPasswordRequiredCharacters();
  var generatePasswordCharacters = "";

  for (var i = 0; i < passwordNumberCharacters; i++) {
    var randomIndex = Math.floor(
      Math.random() * passwordWholeCharacters.length
    );
    generatePasswordCharacters += passwordWholeCharacters[randomIndex];
  }

  return generatePasswordCharacters;
}

//this function updates the generated password text element
function updatesPasswordTxt() {
  generatePasswordTxtEl.textContent = generatePassword();
}

//updates the generated password txt when the generate password button clicked
generatePasswordBtnEl.addEventListener("click", function () {
  updatesPasswordTxt();
});

//updates the generated password txt when the password size slider updated
sliderInputEl.addEventListener("input", function () {
  updatesPasswordTxt();
});
