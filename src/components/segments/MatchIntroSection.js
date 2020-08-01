import React from 'react';
import { Row } from 'react-bootstrap';

const MatchIntroSection = () => {
    return(
        <>
            <Row className="justify-content-center">
                <h2 className="winner">Choose your options from left</h2>
            </Row>

            <Row className="justify-content-center">
                <p style={{color:"#838383"}}>Computer options are disabled. No hack please :)</p>
            </Row>  

        </>
    );
};

export default MatchIntroSection;