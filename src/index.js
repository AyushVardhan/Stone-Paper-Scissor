// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the game
  const startGame = () =>{
      const playButton = document.querySelector('.intro button');
      const introScreen = document.querySelector('.intro');
      const match = document.querySelector('.match');

      playButton.addEventListener('click', ()=>{
        introScreen.classList.add('fadeOut');
        match.classList.add('fadeIn');
      });
  }

  //Play game
  const playGame = () => {
    
    // lets select all the button from options for player
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    // to reset animation again and again in each iteration
    hands.forEach(hand => {
      hand.addEventListener('animationend',function(){
        this.style.animation='';
      })
    });
    // Computer options
    const computerOptions = ['rock','paper','scissors'];

    options.forEach(option=>{
      option.addEventListener("click",function(){
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        console.log("computerChoice : "+computerChoice);
        
        setTimeout(()=>{
                  // compareHands();
        compareHands(this.textContent, computerChoice);

        playerHand.src = `./img/${this.textContent}.png`;
        computerHand.src = `./img/${computerChoice}.png`;
        },2000);

        playerHand.style.animation = 'shakeComputer 2s ease';
        computerHand.style.animation = 'shakePlayer 2s ease';
      });
    });
  }

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {

    const winner = document.querySelector('.winner');
    if(playerChoice === computerChoice){
      winner.textContent = 'It is a tie';
      return;
    }

    if(playerChoice === 'rock'){
      if(computerChoice === 'scissors'){
        winner.textContent = 'Player Wins!';
        pScore++;
      }else{
        winner.textContent = 'Computer Wins!';
        cScore++;
      }
      updateScore();
      return;
    }

    if(playerChoice === 'paper'){
      if(computerChoice === 'scissors'){
        winner.textContent = 'Computer Wins!';
        cScore++;
      }else{
        winner.textContent = 'Player Wins!';
        pScore++;
      }
      updateScore();
      return;
    }

    if(playerChoice === 'scissors'){
      if(computerChoice === 'rock'){
        winner.textContent = 'Computer Wins!';
        cScore++;
      }else{
        winner.textContent = 'Player Wins!';
        pScore++;
      }
      updateScore();
      return;
    }
  }

  startGame();
  playGame();
}

game();