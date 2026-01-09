const sliderInputEl = document.getElementById("passwordSizeInput");
const sliderCharactersCountEl = document.getElementById(
  "sliderCharactersCount"
);

sliderCharactersCountEl.textContent = sliderInputEl.value;
sliderInputEl.oninput = function () {
  sliderCharactersCountEl.textContent = this.value;
};
