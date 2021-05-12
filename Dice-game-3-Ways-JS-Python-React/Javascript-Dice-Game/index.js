// highest roll wins
// Player __ wins
// 2 divs side by side  with dice in them that show the generated number
// button below labled roll
// roll generates random number 1 -6
// compare and that player wins
const output = document.querySelector("#output");
const button = document.querySelector("button");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
let winner, player1Roll, player2Roll;

button.addEventListener("click", function () {
  let rolls = [roll(6), roll(6)];
  let temp;
  if (rolls[0] == rolls[1]) {
    temp = "It was a tie";
  } else if (rolls[0] > rolls[1]) {
    temp = "Player One wins";
  } else if (rolls[0] < rolls[1]) {
    temp = "Player Two wins";
  }
  //   update innerthml with contents of temp
  output.innerHTML = temp;
  player1.innerHTML = rolls[0];
  player2.innerHTML = rolls[1];
});
roll = (num) => {
  let rNumber = Math.floor(Math.random() * num + 1);
  // unicode for html 9855
  let n = 9855 + rNumber;
  let char = "&#" + n + ";";
  return char;
};
