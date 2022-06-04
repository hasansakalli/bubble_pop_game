const ballons = document.querySelector(".ballons");
const result = document.querySelector(".result");
const gameBtn = document.getElementById("gameBtn");

let i;
let count = 0;
var balon;
let myColor;
let randomColor;
var colors;

window.addEventListener("load", start());

function start() {
  for (i = 0; i < 25; i++) {
    colors = ["red", "blue", "yellow", "black", "green", "orange"];
    randomColor = Math.floor(Math.random() * colors.length);
    myColor = colors[randomColor];
    balon = document.createElement("li");
    balon.classList.add("balon");
    balon.style.backgroundColor = myColor;
    balon.style.color = myColor;
    ballons.append(balon);
    balon.innerHTML = "POP";
  }
}

const yeniBalon = document.querySelectorAll("li");
yeniBalon.forEach((item) => {
  item.addEventListener("mouseover", showNumber);

  function showNumber() {
    if (this.style.backgroundColor !== "transparent") {
      this.style.backgroundColor = "transparent";
      myAudio();
      count++;
      showDelete();
    }
  }

  function showDelete() {
    if (count == 25) {
      result.style.display = "grid";
      ballons.style.display = "none";
    }
  }
});
function newGame() {
  window.location.reload();
}

function myAudio() {
  var audio = new Audio("./bubble.mp3");
  audio.play();
}
