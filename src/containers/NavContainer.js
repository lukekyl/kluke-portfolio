import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';


class NavContainer extends Component {


    render() {

        return (
            <Navbar className="Nav_Bar" bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="/">Kyle Luke Portfolio</Navbar.Brand>
            </Navbar>
        )
    };
}

export default NavContainer;
