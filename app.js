const NAME = document.querySelector("#name");
const HEIGHT = document.querySelector("#bodyHeight");
const WEIGHT = document.querySelector("#bodyWeight");
const FORM = document.querySelector("form");
const RESULT_DISPLAY = document.querySelector("h2");
const RESULT_DISPLAY_TEXT = RESULT_DISPLAY.textContent;
const TABLE = document.querySelector(".table");

let result = 0;
let arr = [];

FORM.addEventListener("submit", (event) => {
  event.preventDefault();

  result = WEIGHT.value / (HEIGHT.value * HEIGHT.value);
  result = Number(result.toFixed(1));

  let verdict = "";

  switch (result) {
    case result < 18.5:
      verdict = "under-weight";
      break;
    case result >= 18.5 && result < 25:
      verdict = "normal";
      break;
    case result >= 25 && result < 30:
      verdict = "overweight";
      break;
    default:
      verdict = "obese";
  }

  let obj = {
    name: NAME.value,
    bmi: result,
    verdict,
  };
  arr.push(obj);
  console.log(arr);
  RESULT_DISPLAY.textContent = RESULT_DISPLAY_TEXT + " " + result;

  // if (result > 18.5 && result < 25) {
  //   RESULT_DISPLAY.style.color = "seagreen";
  // } else if (result >= 25 && result < 30) {
  //   RESULT_DISPLAY.style.color = "orangered";
  // } else {
  //   RESULT_DISPLAY.style.color = "crimson";
  // }
});
