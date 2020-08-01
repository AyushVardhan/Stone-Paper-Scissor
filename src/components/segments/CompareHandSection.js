import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ComputerHandSection = () => {
    return(
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
    );
};

export default ComputerHandSection;