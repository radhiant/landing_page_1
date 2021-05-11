import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default class NavbarComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            navbarShadow: 'mt-3',
        }
    }


    componentDidMount() {
        // Onscroll 
        window.addEventListener('scroll', () => {
            let navbarShadow = 'bg-white shadow';
            if (window.scrollY === 0) {
                navbarShadow = 'mt-3';
            }
            this.setState({ navbarShadow });
        });
    }

    render() {
        return (

            <Navbar collapseOnSelect expand="lg" className={`${this.state.navbarShadow}`} fixed="top" variant="light">
                <div className="container">
                    <Navbar.Brand href="#home">
                        <img src="assets/vector-logo.svg" height="35px" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="me-4 link-navbar" href="/#">Product</Nav.Link>
                            <Nav.Link className="me-4 link-navbar" href="/#">Customer</Nav.Link>
                            <Nav.Link className="me-4 link-navbar" href="/#">Pricing</Nav.Link>
                            <Nav.Link className="me-4 link-navbar" href="/#">Resource</Nav.Link>
                        </Nav>
                        <Nav>
                            <li className="nav-item p-3 d-flex">
                                <a href="/#" className="nav-link btn-custom-outline rounded text-center me-2" id="btn-sign">Sign In</a>

                                <a href="/#" className="nav-link btn-custom-nav rounded text-center" id="btn-sign">Sign Up</a>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </div>

            </Navbar>
        )
    }
}
