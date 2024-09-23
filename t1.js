let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let msgcontainer = document.querySelector(".msgcontainer");
let newgame = document.querySelector(".newgame");

let turnO = true;

const winnings = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let fun = boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      console.log("button was clicked.");
      turnO = false;
      box.innerText = "O";
    } else {
      console.log("button was clicked.");
      turnO = true;
      box.innerText = "X";
    }
    box.disabled = true;

    checkwinner();
  });
});

const showwinner = (winner) => {
  msg.innerText = `Congratulations, The winner is ${winner}`;
  msgcontainer.classList.remove("hide");
};

const checkwinner = () => {
  for (let patterns of winnings) {
    let pos1 = boxes[patterns[0]].innerText;
    let pos2 = boxes[patterns[1]].innerText;
    let pos3 = boxes[patterns[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner", pos1);
		for(box of boxes){
			box.disabled=true;
		}
        showwinner(pos1);

      }
    }
  }
};

const newgameF = () => {
  msgcontainer.classList.add("hide");
  turnO=true;
	for(box of boxes){
		box.innerText="";
		box.disabled=false;
	}
};

const resetF = () => {
  msgcontainer.classList.add("hide");
  turnO = true;
  for (box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
  
};

newgame.onclick = () => {
  newgameF();
};
reset.onclick = () => {
  resetF();
};