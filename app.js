const NAME = document.querySelector("#name");
const HEIGHT = document.querySelector("#bodyHeight");
const WEIGHT = document.querySelector("#bodyWeight");
const FORM = document.querySelector("form");
const RESULT_DISPLAY = document.querySelector("h2");
const TABLE = document.querySelector(".table");

let result = 0;
let arr = [];

FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  removeLastLine();
  result = WEIGHT.value / (HEIGHT.value * HEIGHT.value);
  result = Number(result.toFixed(1));

  let verdict = "";

  if (result < 18.5) {
    verdict = "under-weight";
  } else if (result >= 18.5 && result < 25) {
    verdict = "normal";
  } else if (result >= 25 && result < 30) {
    verdict = "over-weight";
  } else {
    verdict = "obese";
  }

  let obj = {
    name: NAME.value,
    bmi: result,
    verdict,
  };

  createEntry(obj);

  createLastLine();
});

function createEntry(object) {
  const LIST_ELEMENT = document.createElement("li");
  const NAME_DIV = document.createElement("div");
  const BMI_DIV = document.createElement("div");
  const VERDICT_DIV = document.createElement("div");
  const DEL_BTN = document.createElement("button");

  // LIST Element
  LIST_ELEMENT.classList.add("list-entry");

  // NAME
  NAME_DIV.classList.add("name-wrapper");
  NAME_DIV.textContent = object.name;
  LIST_ELEMENT.append(NAME_DIV);

  // BMI
  BMI_DIV.classList.add("bmi-wrapper");
  BMI_DIV.textContent = object.bmi;
  LIST_ELEMENT.append(BMI_DIV);

  // VERDICT
  colorVerdict(VERDICT_DIV, object.verdict);
  VERDICT_DIV.classList.add("verdict-wrapper");
  VERDICT_DIV.textContent = object.verdict;
  LIST_ELEMENT.append(VERDICT_DIV);

  // DEL
  DEL_BTN.classList.add("btn--del");
  DEL_BTN.textContent = "delete";
  DEL_BTN.addEventListener("click", deleteLine);
  LIST_ELEMENT.append(DEL_BTN);

  TABLE.append(LIST_ELEMENT);
}

// HELPER FUNCTIONS
function colorVerdict(div, weightcase) {
  switch (weightcase) {
    case "under-weight":
      return div.classList.add("underweight");
      break;
    case "normal":
      return div.classList.add("normal");
      break;
    case "over-weight":
      return div.classList.add("overweight");
      break;
    case "obese":
      return div.classList.add("obese");
      break;
  }
}

function deleteLine(event) {
  event.preventDefault();

  let warning = confirm("Do you really want to delete this line?");

  if (!warning) {
    return;
  }
  event.target.parentNode.remove();
}

function createLastLine() {
  const LAST_LINE = document.createElement("li");
  const RESET_BTN = document.createElement("button");
}
