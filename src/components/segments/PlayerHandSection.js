import React from 'react';
import { Row, Col } from 'react-bootstrap';

const PlayerHandSection = () => {
    return(
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
    );
};


export default PlayerHandSection;