const computerChoices = ["r", "p", "s"];
let wins = 0;
let losses = 0;
let ties = 0;

document.onkeyup = (event) => {
  let userGuess = event.key;
  let computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(`User Guess = ${userGuess}`);
  console.log(`Computer Guess = ${computerGuess}`);
  if (userGuess === "r" || userGuess === "p" || userGuess === "s") {
    if (userGuess === "r" && computerGuess === "s") {
      wins++;
    } else if (userGuess === "r" && computerGuess === "p") {
      losses++;
    } else if (userGuess === "s" && computerGuess === "r") {
      losses++;
    } else if (userGuess === "s" && computerGuess === "p") {
      wins++;
    } else if (userGuess === "p" && computerGuess === "r") {
      wins++;
    } else if (userGuess === "p" && computerGuess === "s") {
      losses++;
    } else if (userGuess === computerGuess) {
      ties++;
    }
  }

  let html = `
            <p>You choice: ${userGuess}</p>       
      
            <p>The computer choice: ${computerGuess}</p>
            <p>wins: ${wins}</p>
            <p>losses: ${losses}</p>
            <p>ties: ${ties}</p>

`;
  document.querySelector("#game").innerHTML = html;
};
