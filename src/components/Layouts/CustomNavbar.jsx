import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
                    <Navbar.Brand href="/">
                        <img
                            src={process.env.PUBLIC_URL + "/assets/favicon.png"}
                            width="32"
                            height="32"
                            className="d-inline-block align-top mr-md-2"
                            alt="Site-Logo"
                        />
                        CodeLife
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav className="mr-lg-5 h5">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/news">News</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}