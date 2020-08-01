import React, { useState, useEffect } from 'react';
import ScoreBoard from '../components/segments/ScoreBoard';
import PrepareMatchSection from '../components/segments/PrepareMatchSection';

const GamePlay = () => {

    const[playerScore, setPlayerScore] = useState(0);
    useEffect(() => {console.log("player score update done" + playerScore)});

    const[computerScore, setComputerScore] = useState(0);
    useEffect(() => {console.log("computer score update done" + computerScore)});

    const refresh = () => {
        setPlayerScore(playerScore => playerScore = 0);
        setComputerScore(computerScore => computerScore = 0);
    };
    
    return (
        <section className="game">
            <ScoreBoard playerRank={playerScore} computerRank={computerScore}/>

            <PlayGameSection updatePlayer={() => setPlayerScore(playerScore => playerScore+1)} 
                             updateComputer={() => setComputerScore(computerScore => computerScore+1)}
            />

            <PrepareMatchSection refreshGame={refresh}/>
        </section>
    );
};

const PlayGameSection = (props) => {
    const letsPlayOnClick = () =>{
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        // console.log("Click registered");
        introScreen.classList.add('fadeOut');
        match.classList.add('fadeIn');
        playGame(props);
    };

    return (
        <div className="intro">
            <h1>Stone Paper and Scissor Game</h1>
            <button onClick={letsPlayOnClick}>let's play</button>
        </div>
    );
};

const compareHands = (playerChoice, computerChoice, props) => {

    const winner = document.querySelector('.winner');
    if(playerChoice === computerChoice){
      winner.textContent = 'It is a tie';
      return;
    }

    if(playerChoice === 'rock'){
      if(computerChoice === 'scissors'){
        winner.textContent = 'Player Wins!';
        props.updatePlayer();
      }else{
        winner.textContent = 'Computer Wins!';
        props.updateComputer();
      }
    }

    if(playerChoice === 'paper'){
      if(computerChoice === 'scissors'){
        winner.textContent = 'Computer Wins!';
        props.updateComputer();
      }else{
        winner.textContent = 'Player Wins!';
        props.updatePlayer();
      }
    }

    if(playerChoice === 'scissors'){
      if(computerChoice === 'rock'){
        winner.textContent = 'Computer Wins!';
        props.updateComputer();
      }else{
        winner.textContent = 'Player Wins!';
        props.updatePlayer();
      }
    }
}

const playGame = (props) => {
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
        compareHands(this.textContent, computerChoice, props);

        playerHand.src = `./img/${this.textContent}.png`;
        computerHand.src = `./img/${computerChoice}.png`;
        },2000);

        playerHand.style.animation = 'shakeComputer 2s ease';
        computerHand.style.animation = 'shakePlayer 2s ease';
        });
    });        
}

export default GamePlay;