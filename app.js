const HEIGHT = document.querySelector("#bodyHeight");
const WEIGHT = document.querySelector("#bodyWeight");
const FORM = document.querySelector("form");
const RESULT_DISPLAY = document.querySelector("h2");
const RESULT_DISPLAY_TEXT = RESULT_DISPLAY.textContent;

let result = 0;

FORM.addEventListener("submit", (event) => {
  event.preventDefault();

  result = WEIGHT.value / (HEIGHT.value * HEIGHT.value);
  result = Number(result.toFixed(1));

  RESULT_DISPLAY.textContent = RESULT_DISPLAY_TEXT + " " + result;

  if (result > 18.5 && result < 25) {
    RESULT_DISPLAY.style.color = "seagreen";
  } else if (result >= 25 && result < 30) {
    RESULT_DISPLAY.style.color = "orangered";
  } else {
    RESULT_DISPLAY.style.color = "crimson";
  }
});
