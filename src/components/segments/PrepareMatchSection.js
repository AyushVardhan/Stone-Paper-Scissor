import React from 'react';
import {Row} from 'react-bootstrap';
import ComputerHandSection from '../segments/CompareHandSection';
import PlayerHandSection from '../segments/PlayerHandSection';
import MatchIntroSection from '../segments/MatchIntroSection';

const PrepareMatchSection = (props) => {
    return(
        <div className="match fadeOut mt-1">
            <MatchIntroSection/>
            <Row className="justify-content-center">
                <button className="playAgain mr-1" onClick={() => props.refreshGame()} 
                        style={{height:"25px",width:"100px",padding:"2px",fontSize:"15px"}}>

                    Start Fresh

                </button>
            </Row>

            <Row className="hands mt-5">
                <PlayerHandSection/>
                <ComputerHandSection/>
            </Row>
        </div>
    );
}

export default PrepareMatchSection;