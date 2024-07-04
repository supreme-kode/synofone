import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SmartphoneComponent = ({kategori}) => {
    return (
        <>
            <div className="smartphone mt-5">
                <Container>
                    <Row>
                        <Col>
                            <h5>Smartphone {kategori}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <Card>
                                <Card.Img variant="top" src="../src/assets/hp1.png" />
                                <Card.Body>
                                    <Link to="/detail">Xiaomi Redmi Note 13</Link>
                                    <Card.Title>IDR 500.000</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card>
                                <Card.Img variant="top" src="../src/assets/hp2.png" />
                                <Card.Body>
                                    <Link to="/detail">Oppo A79 5G</Link>
                                    <Card.Title>IDR 500.000</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card>
                                <Card.Img variant="top" src="../src/assets/hp3.png" />
                                <Card.Body>
                                    <Link to="/detail">phone 15 Pro Max</Link>
                                    <Card.Title>IDR 500.000</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card>
                                <Card.Img variant="top" src="../src/assets/hp4.png" />
                                <Card.Body>
                                    <Link to="/detail">Samsung Galaxy S23 FE</Link>
                                    <Card.Title>IDR 500.000</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>                
            </div>
        </>
    );
}

export default SmartphoneComponent