const gameSec = document.getElementById("game-sec");

function fillBubble() {
  for (let i = 0; i < 80; i++) {
    const newBubbleElem = document.createElement("div");
    let bubbleNum = Math.floor(Math.random() * 10);
    newBubbleElem.innerHTML = `
        <div class="bubble-elem">${bubbleNum}</div>
        `;
    gameSec.appendChild(newBubbleElem);
  }

  gameSec.addEventListener("click", (e) => {
    if (
      e.target.innerText == document.getElementById("hit-num-value").innerText
    ) {
      hitNumValChanger();
      scoreUpdate();
    }
  });
}

function timerFun() {
  const timerValueRef = document.getElementById("timer-value");
  timerValueRef.innerText = "60";
  const timerInterval = setInterval(() => {
    timerValueRef.innerText--;
    if(timerValueRef.innerText == 0){
      clearInterval(timerInterval)
      gameSec.innerHTML = "<h1>Game Over</h1>"
    }
  }, 1000);

}

function hitNumValChanger() {
  const hitNumValueRef = document.getElementById("hit-num-value");
  let hitNumValue = Math.floor(Math.random() * 10);
  hitNumValueRef.innerText = hitNumValue;
}

let scoreValue = 0;
const scoreValueRef = document.getElementById("score-value");
scoreValueRef.innerText = `${scoreValue}`;
function scoreUpdate() {
  scoreValue += 10;
  scoreValueRef.innerText = `${scoreValue}`;
}

function startGame() {
  fillBubble();
  timerFun();
  hitNumValChanger();
  scoreUpdate();
}

startGame();
