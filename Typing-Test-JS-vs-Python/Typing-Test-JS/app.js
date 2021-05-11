//http://clagnut.com/blog/2380/#Longer_pangrams_in_English_.28in_order_of_fewest_letters_used.29
const wording = [
  "When zombies arrive, quickly fax judge Pat.",
  "The quick brown fox jumps over the lazy yellow dog.",
  "Heavy boxes perform quick waltzes and jigs.",
  "Sympathizing would fix Quaker objectives.",
  "Pack my red box with five dozen quality jugs.",
  "Fake bugs put in wax jonquils drive him crazy.",
  "Who packed five dozen old quart jugs in my box?",
];
let startTime, endTime;
const message = document.querySelector(".message");
const typeText = document.querySelector("textarea");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  if (this.innerText == "Start") {
    typeText.disabled = false;
    playGame();
  } else if (this.innerText == "Done") {
    typeText.disabled = true;
    button.innerText = "Start";
    endPlay();
  }
});
typeText.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    typeText.disabled = true;
    button.innerText = "Start";
    endPlay();
  }
});

playGame = () => {
  typeText.value = "";
  // move curser into text box
  typeText.focus();
  let randomNum = Math.floor(Math.random() * wording.length);
  message.innerHTML = wording[randomNum];
  let date = new Date();
  startTime = date.getTime();
  button.innerText = "Done";
};
wordCounter = (strWords) => {
  let response = strWords.split(" ").length;
  return response;
};
compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt = 0;
  words1.forEach(function (item, index) {
    if (item == words2[index]) {
      cnt++;
    }
  });
  return cnt + " correct out of " + words1.length + " words";
};
endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;
  let str = typeText.value;
  let wordCount = wordCounter(str);
  let speed = Math.round((wordCount / totalTime) * 60);
  let finalMessage = "Your typing speed is " + speed + " words per minute.";
  finalMessage += "<br>" + compareWords(message.innerText, str);
  message.innerHTML = finalMessage;
};
