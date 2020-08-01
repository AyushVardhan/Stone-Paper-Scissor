import React from 'react';
import {Row} from 'react-bootstrap';
import ComputerHandSection from '../segments/CompareHandSection';
import PlayerHandSection from '../segments/PlayerHandSection';
import MatchIntroSection from '../segments/MatchIntroSection';

const PrepareMatchSection = () => {
    return(
        <div className="match fadeOut">
            <MatchIntroSection/>

            <Row className="hands mt-5">
                <PlayerHandSection/>
                <ComputerHandSection/>
            </Row>
        </div>
    );
}

export default PrepareMatchSection;