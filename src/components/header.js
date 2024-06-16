import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from "../assets/images/logo.svg";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Header() {

    return (
            <div>
                <Navbar expand="lg" className="bg-body-tertiary fixed-top" bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    Surendar s
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="justify-content-end flex-grow-1 pe-3">
                       <Nav.Link><Link to="/">Home</Link></Nav.Link> 
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                        <Nav.Link><Link to="/services">Services</Link></Nav.Link>
                        <Nav.Link><Link to="/portfolio">Portfolio</Link></Nav.Link>  
                        <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>            
                    </Nav>
                    <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Container>
                </Navbar>   
            </div>                
    );
  }
  
  export default Header;