let chosenNum = Math.round(Math.random() * 19) + 1;
console.log(chosenNum);

const tryCountNum = document.querySelector(".tryCount");
const trySentence = document.querySelector(".trySentence");
let tryGrammar = document.querySelector(".tryGrammar");

const formElm = document.querySelector("form");
const resetBtn = document.querySelector(".reset");
const inputBtn = document.querySelector(".submit");

const inputArea = document.querySelector(".inputArea");

const warningWithHint = document.querySelector(".hint");
let tries = 5;
let input;

//take input, test and show output
const takeInputAndTest = () => {

  if (tries === 0 && input !== chosenNum) {
    warningWithHint.textContent = `Sorry! You failed to guess the number. It was ${chosenNum}`;
    trySentence.textContent = `${tries} ${tryGrammar.textContent} left`;
    inputArea.value = ``;
    inputBtn.setAttribute("disabled", "disabled");
    return;
  }

  if (input > chosenNum) {
    warningWithHint.textContent = "Wrong guess! The number is less than that.";
  } else if (input < chosenNum) {
    warningWithHint.textContent = "Wrong guess! The number is greater than that.";
  } else {
    warningWithHint.textContent = "Congratulation! You have perfectly guessed the number.";
    trySentence.style.display = "none";
    inputArea.value = `${chosenNum}`;
    inputBtn.setAttribute("disabled", "disabled");
  }

};

//count tries and do accordingly
const tryCounter = () => {
  if (tries > 0) {
    tries--;
  }
  tryCountNum.textContent = tries;
  tryGrammar.textContent = tries < 2 ? "try" : "tries";
};

//things to do upon clicking on the "Submit" button
formElm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  input = parseInt(inputArea.value)
  if (!(input > 1 || input < 20)) {
    alert("Hey! The number must be between 1 and 20");
  } else {
    inputArea.value = "";
    tryCounter();
    takeInputAndTest();
  }
});


//things to do upon clicking on the "Reset" button
resetBtn.addEventListener("click", (evt) => {
  tries = 5;
  input = null;
  tryCountNum.textContent = tries;
  trySentence.style.display = "block"
  inputBtn.removeAttribute("disabled", "disabled");
  inputArea.value = "";
  warningWithHint.textContent = "";
  chosenNum = Math.round(Math.random() * 19) + 1;
  console.log(chosenNum);
});
