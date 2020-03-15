import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import { Row ,Col, Container} from 'react-bootstrap';
import logo from '../images/logo.png';
import './Header.css'
import users from '../fakeData/users';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    render() {
        return (
            <header>
                <Row>
                    <Col>
                        <Navbar bg="primary" variant="dark">
                        <Navbar.Brand href="#home"><img src={logo} alt=""/>Profile</Navbar.Brand>
                            <Nav className="mr-auto ">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#about-us">About Us</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                            <Form inline>
                                <p className="countUser"><FontAwesomeIcon icon={faUser} /><b style={{color:"darkred"}}>{users.length}</b></p>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-light">Search</Button>
                            </Form>
                            
                        </Navbar>
                    </Col>
                </Row>
            </header>
        );
    }
}

export default Header;