// console.log("script.js");

/**generate Random number */
let randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log("randomNumber", randomNumber);
let availableGuess = 5;
let guessSum = 0;
let userGuess = 0;
document.getElementById("guessNumber").focus();

function printFirstLoad() {
  // document.getElementById("randNumber").innerHTML =
  //   "random number: " + randomNumber;
  document.getElementById("availableGuess").innerHTML =
    "Available Guess Numbers: " + availableGuess;
}

//guess random number
function guessRdNumber() {
  const inputNumber = document.getElementById("guessNumber").value;
  let a = randomNumber;
  availableGuess = availableGuess - 1;

  console.log("available guessssss", availableGuess);
  console.log("userGuessuserGuess", userGuess);
  console.log("GuessSum-GuessSum", guessSum);

  let b = guessSum / userGuess;

  if (availableGuess >= 0) {
    let alertUser = "";
    userGuess = userGuess + 1;
    guessSum = parseInt(guessSum) + parseInt(inputNumber);
    let averageGuess = guessSum / userGuess;

    if (inputNumber < a) {
      // console.log("inputnumber", inputNumber);
      // console.log("aakljasdklfj", a);
      alertUser = "too low";
    } else if (inputNumber > a) {
      // console.log("inputnumber", inputNumber);
      // console.log("aakljasdklfj", a);
      alertUser = "too high";
    } else {
      alertUser = "correct";
    }

    const msg = `Your Guess Number is ${alertUser}`;
    if (alertUser === "correct") {
      document.getElementById("guessResult").innerHTML =
        msg + ". You can play again";
      document.getElementById("guessResult").classList.remove("alert-danger");
      document.getElementById("guessResult").classList.add("alert-success");
    } else {
      document.getElementById("guessResult").innerHTML =
        msg + ". Please guess again.";
      document.getElementById("guessResult").classList.remove("alert-success");
      document.getElementById("guessResult").classList.add("alert-danger");
    }

    document.getElementById(
      "availableGuess"
    ).innerHTML = `You have ${availableGuess} guesses left`;

    document.getElementById("guessNumber").focus();

    addGuessNumber(inputNumber);
    document.getElementById("guessNumber").value = "";
  } else {
    document.getElementById("availableGuess").innerHTML =
      "You don't have any more guess. Please click 'Restart Game' to play again.";
    document.getElementById("guessNumber").value = "";
  }
}

//
function addGuessNumber(guessNumber) {
  let node = document.createElement("LI");
  let textnode = document.createTextNode(guessNumber);
  node.appendChild(textnode);
  document.getElementById("guessList").appendChild(node);
}

function startOver() {
  randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  console.log("randomnumbererer", randomNumber);
  availableGuess = 5;
  console.log("helloooifjsoid", availableGuess);
  userGuess = 0;
  guessSum = 0;
  printFirstLoad();
  document.getElementById("guessResult").innerHTML = "";
  document.getElementById("guessResult").classList.remove("alert-success");
  document.getElementById("guessResult").classList.remove("alert-danger");
  document.getElementById("guessList").innerHTML = "";
  document.getElementById("guessNumber").value = "";
  document.getElementById("guessNumber").focus();
}

function keyDowndInGuessInput() {
  if (event.keyCode == 13) document.getElementById("guessClick").click();
}
