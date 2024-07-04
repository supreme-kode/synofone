import { useState } from "react";
import NavbarComponent from "../components/NavbarComponent";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SmartphoneComponent from "../components/SmartphoneComponent";
import FooterComponent from "../components/FooterComponent";

const DetailPage = () => {
    const [jumlah, setjumlah] = useState(1);

    const handleJumlahChange = (Event) => {
        setjumlah(parseInt(event.target.value));
    }

    return (
        <>
            <NavbarComponent />
            <div class="detail mt-5">
                <Container>
                    <Row className="d-flex align-items-center">
                        <Col lg={5}>
                            <Card>
                                <Card.Body>
                                    <img src="../src/assets/hp3.png" className="img-fluid raounded w-100" alt="" />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={7}>
                            <div className="deskripsi">
                                <h4>Iphone 15 Pro Max</h4>
                                <div className="spek">
                                    <h6>Spesifikasi</h6>
                                    <ul>
                                        <li>Chip A7</li>
                                        <li>Chip A7</li>
                                        <li>Chip A7</li>
                                        <li>Chip A7</li>
                                    </ul>
                                </div>
                                <div className="colors">
                                    <h6>Pilihan Warna</h6>
                                    <div className="color-options">
                                        <button className="btn me-2">Grey</button>
                                        <button className="btn me-2">Red</button>
                                        <button className="btn me-2">Purpel</button>
                                    </div>
                                </div>
                                <br />
                                <h6>Jumlah:</h6>
                                <Row>
                                    <Col lg={4}>
                                        <Form>
                                            <Form.Control type="number" min="1" name="jumlah" value={jumlah} onChange={handleJumlahChange} />
                                        </Form>
                                    </Col>
                                    <Col lg={8}>
                                        <Link to="/login" className="btn btn-primary w-100">Masukkan Ke Keranjang</Link>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <SmartphoneComponent kategori={"Unggulan"}/>
            <FooterComponent/>
            

        </>
    );
}

export default DetailPage