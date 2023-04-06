//This line declares a constant display and assigns it to the DOM element with the id of "display".
const display = document.getElementById("display"); 
//These lines declare variables num1, num2, operation, and result and initialize them to null.
let num1 = null;
let num2 = null;
let operation = null;
let result = null;

//This line declares a function numberClick that takes an event object as a parameter.

function numberClick(event) {

  //This line declares a constant numString and assigns it to the value of the target element that triggered the event.
  const numString = event.target.value;

  //These lines check if the operation is null or not, and if it is, num1 is assigned numString if it is null or concatenated with numString if it is not. Otherwise, num2 is assigned numString if it is null or concatenated with numString if it is not.
  if (!operation) {
    num1 = num1 ? num1 + numString : numString;
  } else {
    num2 = num2 ? num2 + numString : numString;
  }

  display.value = operation ? num2 : num1;
}

function operationClick(event) {
  if (!operation) {
    operation = event.target.textContent;
    num2 = null;
  } else {
    num1 = calculateResult(num1, num2, operation);
    operation = event.target.textContent;
    num2 = null;
  }

  display.value = operation;
}

function clearClick() {
  num1 = null;
  num2 = null;
  operation = null;
  result = null;
  display.value = "";
}
//These lines call calculateResult with num1, num2, and operation as arguments, and assign the returned value to result. Then, the value of the display element is set to result, num1 is assigned result,

function equalsClick() {
  result = calculateResult(num1, num2, operation);
  display.value = result;
  num1 = result;
  result +=num2;
}

function calculateResult(num1, num2, operation) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return null;
  }
}

document.querySelectorAll("button").forEach(button => {
  if (button.value.match(/[0-9]/)) {
    button.addEventListener("click", numberClick);
  } else if (button.textContent.match(/[\+\-\*\/]/)) {
    button.addEventListener("click", operationClick);
  } else if (button.id === "clearButton") {
    button.addEventListener("click", clearClick);
  } else if (button.id === "equalsButton") {
    button.addEventListener("click", equalsClick);
  }
}
);