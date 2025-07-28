let userscore = 0;
let compscore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-container");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
  const choices = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
};

const showwinner = (userwin,userchoice,compchoice) => {
  if (userwin) {
    console.log("user wins");
      msg.innerText = `You Win!! ${userchoice} beats ${compchoice}`;
      msg.style.backgroundColor = "green";
     
      userscore++;
      userscorepara.innerText = `${userscore}`;
  } 
   else {
    console.log("computer wins");
      msg.innerText = `You lost!!! ${compchoice} beats ${userchoice}`;
      msg.style.backgroundColor = "red";
      compscore++;
      compscorepara.innerText = `${compscore}`;

  }
};

const playgame = (userchoice) => {
  console.log("User choice:", userchoice);
  const compchoice = gencompchoice();
  console.log("Computer choice:", compchoice);

  if (userchoice === compchoice) {
    console.log("Draw");
      msg.innerText = "Draw";
      msg.style.backgroundColor = "blue";
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissor" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin,userchoice,compchoice);
  }
};

choice.forEach((btn) => {
  btn.addEventListener("click", () => {
    const userchoice = btn.getAttribute("id");
    playgame(userchoice);
  });
});
