import React from 'react';
import { Row, Col } from 'react-bootstrap';

const GamePlay = () => {
    let pScore = 0;
    let cScore = 0;

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

    const playGame = () => {
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

    const letsPlayOnClick = () =>{
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        // console.log("Click registered");
        introScreen.classList.add('fadeOut');
        match.classList.add('fadeIn');
        playGame();
    };

    return (
        <section className="game">
            <Row className="score">
                <Col className="player-score mt-3">
                    <h2>Player</h2>
                    <p>0</p>
                </Col>

                <Col className="computer-score mt-3">
                    <h2>Computer</h2>
                    <p>0</p>
                </Col>
            </Row>

            <div className="intro">
                <h1>Stone Paper and Scissor Game</h1>
                <button onClick={letsPlayOnClick}>let's play</button>
            </div>

            <div className="match fadeOut">
                <Row className="justify-content-center">
                    <h2 className="winner">Choose your options from left</h2>
                </Row>
                <Row className="justify-content-center">
                    <p style={{color:"#838383"}}>Computer options are disabled. No hack please :)</p>
                </Row>
                <Row className="hands mt-5">
                    <Col className="ml-5">
                        <Row className="justify-content-center">
                            <img className="player-hand" style={{width:"200px", height:"200px"}} src="./img/rock.png" alt=""/>
                        </Row>
                        <div className="container">
                            <Row className="options mt-5 justify-content-start">
                                <button className="rock mr-1">rock</button>
                                <button className="paper mr-1">paper</button>
                                <button className="scissors">scissors</button>
                            </Row>                            
                        </div>
                    </Col>
                    <Col className="mr-5">                       
                        <Row className="justify-content-center">
                            <img className="computer-hand" style={{float:"right",width:"200px", height:"200px"}} src="./img/rock.png" alt=""/>
                        </Row>   
                        <div className="container">
                            <Row className="options-pc mt-5 justify-content-end">
                                <button className="rock mr-1" style={{background:"#838383", cursor:"default"}}>rock</button>
                                <button className="paper mr-1" style={{background:"#838383", cursor:"default"}}>paper</button>
                                <button className="scissors" style={{background:"#838383", cursor:"default"}}>scissors</button>
                            </Row>                            
                        </div>                                      
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default GamePlay;