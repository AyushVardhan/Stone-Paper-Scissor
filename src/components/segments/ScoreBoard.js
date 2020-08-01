import React from 'react';
import { Row, Col } from 'react-bootstrap';


const ScoreBoard = (props) => {
    return (
        <Row className="score">
            <Col className="player-score mt-3">
                <h2>Player</h2>
                <p>{props.playerRank}</p>
            </Col>

            <Col className="computer-score mt-3">
                <h2>Computer</h2>
                <p>{props.computerRank}</p>
            </Col>
        </Row>
    );
};

export default ScoreBoard;