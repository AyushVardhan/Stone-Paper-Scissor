import React from 'react';
import { Row, Col } from 'react-bootstrap';

const GamePlay = () => {

    const letsPlayOnClick = () =>{
        console.log("Click registered");
    };

    return (
        <section className="game">
            <Row className="score">
                <Col className="player-score">
                    <h2>Player</h2>
                    <p>0</p>
                </Col>

                <Col className="computer-score">
                    <h2>Computer</h2>
                    <p>0</p>
                </Col>
            </Row>

            <div className="intro fadeOut">
                <h1>Rock Paper and Scissors</h1>
                <button onClick={letsPlayOnClick}>let's play</button>
            </div>

            <div>
                
                <Row className="justify-content-center">
                    <h2 className="winner">Choose an option</h2>
                </Row>

                <Row className="hands">
                    <Col className="ml-5">
                        <img className="player-hand" src="./img/rock.png" alt=""/>
                    </Col>
                    <Col className="mr-5">
                        <img className="computer-hand" style={{float:"right"}} src="./img/rock.png" alt=""/>                    
                    </Col>
                </Row>

                <div className="options">
                    <button className="rock">rock</button>
                    <button className="paper">paper</button>
                    <button className="scissors">scissors</button>
                </div>
            </div>
            
        </section>
    );
};

export default GamePlay;