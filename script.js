const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

buttons.forEach((item) => {
  console.log(item);
  item.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

// project 2
// const form = document.querySelector("form")

// form.addEventListener("submit", (e) => {
//     e.preventDefault()

//    const height =  parseInt(document.querySelector('#height').value)

//    const weight =  parseInt(document.querySelector('#weight').value)

//    const results = document.querySelector('.results')

//    if(height === "" || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//    }else if(weight === "" || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//    } else {
//     (weight / (height * height).toFixed(2))
//    }

// })

// project 03

// const clock = document.getElementById('clock')

// setInterval(() => {
// let date = new Date()
// console.log(date.toLocaleTimeString())
// clock.innerHTML = date.toLocaleTimeString();
// },1000)

// project 4

const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");

const userInput = document.querySelector("#guessField");

const guessSlot = document.querySelector(".guesses");

const lastResult = document.lastResult(".lastResult");

const lowHigh = document.querySelector("lowOrHi");

const startOver = document.querySelector("resultParas");
const remaining = document.querySelector(".remaining");

const p = document.createElement("p");

let prevGues = [];
let numberGues = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);

    ValidateGuess(guess);
  });
}

function ValidateGuess(guess) {
  //
  if(isNaN) {
    alert('Please enter a valid Number')
  } else {
    if(guess < 1) {
        alert('Please enter a valid Number')
    } else {
        prevGues.push(guess)
        if(numberGues  === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
  }
}

function checkGuess(guess) {
  //message print
  if(guess === randomNumber) {
    displayMessage("You Won!")
    endGame()
  } else if (guess < randomNumber) {
    displayMessage(`Number is Tooo low`)
  } else if (guess > randomNumber) {
    displayMessage("Number is to high")
  }
}

function displayGuess(guess) {
  //
  userInput.value = ''
  guessSlot.innerHTML += `${guess}`
  numberGues++;
  remaining.innerHTML = `${11 - numberGues}`
}
function displayMessage(message) {
  //
  lowHigh.innerHTML = `<h2>${message}</h2>`
}
function newGame(message) {
  //
}
function endGame(message) {
  //
  
}
