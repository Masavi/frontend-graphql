//imrc
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import './style.css';

//cc
class HolaMundo extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <Row>
                    <Col>
                    <div className="card" style={{width: "18rem"}}>
                        <img src="https://www.purina.es/sites/g/files/mcldtz1656/files/2018-02/Perro%20salchicha%20%28Miniatura%20de%20pelo%20liso%29_400x378_0.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h1 className="card-title">Card title</h1>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="google.com" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </Col>
                    <Col>
                        <Card>
                            <CardImg top width="100%" src="https://www.purina.es/sites/g/files/mcldtz1656/files/2018-02/Perro%20salchicha%20%28Miniatura%20de%20pelo%20liso%29_400x378_0.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle className="">Cinta Negra</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
 
export default HolaMundo;