// import komponen dari react-bootstrap
import { Navbar, Container, Nav, Form } from "react-bootstrap";

import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

const NavbarComponent = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-primary">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav >
                            <Form>
                                <Form.Control type="search" placeholder="mau cari apa" /> 
                            </Form>
                            <Link to="/login" className="btn btn-warning text-light ms-3">Login</Link>
                            <Link to="/daftar" className="btn btn-outline-light ms-3">Daftar</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent