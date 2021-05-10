// const say = "This is what I say ";
// const say = document.getElementById("say").value;
// const sayReverse = say.split(" ").reverse().join(" ");
// console.log(sayReverse);

const button = document.querySelector("button");
const output = document.querySelector("#output");

const toYodaSpeak = () => {
  const say = document.getElementById("say").value;
  const sayReverse = say.split(" ").reverse().join(" ");
  console.log(sayReverse);
  output.innerHTML = `
  <h2>Yoda say</h2>
        <div class="well" id="yoda-say">${sayReverse}</div>
  `;
};
button.addEventListener("click", toYodaSpeak);
