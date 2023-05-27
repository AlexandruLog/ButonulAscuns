//setting all buttons as "losers";
for (let i = 0; i < 3; ++i) {
  document.getElementsByClassName("btn")[i].value = "Loser";
}
//setting a random button as "winner";
document.getElementsByClassName("btn")[Math.floor(Math.random() * 3)].value = "Winner";

//onclick functiion
function checkBtn(position) {
  const firstPartMessage = document.getElementById("first-part-status");
  firstPartMessage.textContent =
    position + 1 + ":" + document.getElementsByClassName("btn")[position].value;
}

//Bonus part
function generateBtn() {
  const userInput = document.getElementById("noOfButtonsToGenerate").value;
  for (let i = 0; i < userInput; ++i) {
    const newButton = document.createElement("button");
    newButton.value = "Loser";
    newButton.textContent = "Button " + (i + 1);
    newButton.className = "new-btn";
    newButton.setAttribute("onclick", "checkNewBtn(" + `${i}` + ")");
    document.querySelector(".newButtons-area").appendChild(newButton);
  }
  document.getElementsByClassName("new-btn")[Math.floor(Math.random() * userInput)].value =
    "Winner";
}

//onclick function to check the value of each created button;
function checkNewBtn(pos) {
  document.getElementById("bonus-part-status").textContent =
    pos + 1 + ": " + document.getElementsByClassName("new-btn")[pos].value;
}
