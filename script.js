const game = () => {
  let pScore = 0;
  let cScore = 0;

  //to start the game

  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const matchScreen = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      matchScreen.classList.add("fadeIn");
    });
  };
  //playmatch
  const playMatch = () => {
    const options = document.querySelectorAll(".option button");
    const pHand = document.querySelector(".player-hand");
    const cHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hand img");

    hands.forEach(hand => {
      hand.addEventListener('animationend', function () {
        this.style.animation = '';
        
      });
    });
    //computer option randomly generated
    const compOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function () {
        const compNo = Math.floor(Math.random() * 3);
        const compChoice = compOptions[compNo];

        setTimeout(() => {
          compareHand(this.textContent, compChoice);

          //update images
          // console.log(this);
          pHand.src = `./img/${this.textContent}.png`;
          cHand.src = `./img/${compChoice}.png`;
        }, 2000);

        setTimeout(()=>{
          pHand.src=`./img/rock.png`;
        cHand.src=`./img/rock.png`;
        const win=document.querySelector(".winner");
        win.textContent="Choose again!"

        },3500);
        pHand.style.animation = "shakePlayer 2s ease";
        cHand.style.animation = "shakeComputer 2s ease";

      });
    });
  };
  //update score
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const compScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    compScore.textContent = cScore;
  };

  //check who should get the point
  const compareHand = (playerChoice, compChoice) => {
    //update text
    const winner = document.querySelector(".winner");
    //check for tie
    if (playerChoice === compChoice) {
      winner.textContent = "It is a tie!";
      return;
    }
    if (playerChoice === "rock") {
      if (compChoice === "paper") {
        winner.textContent = "Computer win!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "You win!";
        pScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "paper") {
      if (compChoice === "scissors") {
        winner.textContent = "Computer win!";
        cScore++;
        updateScore();

        return;
      } else {
        winner.textContent = "You win!";
        pScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (compChoice === "rock") {
        winner.textContent = "Computer win!";
        cScore++;
        updateScore();

        return;
      } else {
        winner.textContent = "You win!";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  startGame();
  playMatch();
};
game();
//self containing all the codep
