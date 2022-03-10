let chosenNum = Math.round(Math.random() * 20);
console.log(chosenNum);

const tryCountNum = document.querySelector(".tryCount");
const trySentence = document.querySelector(".trySentence");

const formElm = document.querySelector("form");
const resetBtn = document.querySelector(".reset");
const inputBtn = document.querySelector(".submit");

const inputArea = document.querySelector(".inputArea");

const warningWithHint = document.querySelector(".hint");
let tries = 5;
let tryGrammar = document.querySelector(".tryGrammar")
let input;
let gameOver = false;

//take input, test and show output
const takeInputAndTest = () => {
  if (gameOver === false) {
    if (input > chosenNum) {
      warningWithHint.textContent = "Wrong guess! The number is less than that."
    } else if (input < chosenNum) {
      warningWithHint.textContent = "Wrong guess! The number is greater than that."
    } else {
      warningWithHint.textContent = "Congratulation! You have perfectly guessed the number."
      trySentence.textContent = '';
      inputArea.value = `${chosenNum}`;
    }
  } else {
    warningWithHint.textContent = `Sorry! You failed to guess the number. It was ${chosenNum}`
  }
}

//count tries and do accordingly
const tryCounter = () => {
  if (tries > 0) {
    tries--;
  }
  tryCountNum.textContent = tries;
  tryGrammar.textContent = tries < 2 ? "try" : "tries"
  if (tries === 0) {
    gameOver = true;
    inputBtn.setAttribute('disabled', 'disabled');
  }
}

//things to do upon clicking on the "Submit" button
formElm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  input = inputArea.value;
  if (input < 1 || input > 20) {
    alert("Hey! The number must be between 1 and 20");
  } else {
    inputArea.value = '';
    tryCounter();
    takeInputAndTest();
  }
})

//things to do upon clicking on the "Reset" button
resetBtn.addEventListener("click", (evt) => {
  tries = 5;
  tryCountNum.textContent = tries;
  inputBtn.removeAttribute('disabled', 'disabled');
  inputArea.value = "";
  warningWithHint.textContent = "";
  chosenNum = Math.round(Math.random() * 20);
  console.log(chosenNum);
})
