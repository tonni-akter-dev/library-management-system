import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Navigation2 from '../Navigation/Navigation2/Navigation2';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Catalog.css';
const Catalog = () => {
    return (
        <div>
            <Navigation2 />
            {/* catalog  */}
            <div>
                <Container>
                    <Navbar expand="lg">
                        <Container className="catalog-nav">
                            <div>
                                <h1>Catalog</h1>
                            </div>
                            <div>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav>
                                        <NavLink className='navlink_design1' to="/">Search Catalog</NavLink>
                                        <NavLink className='navlink_design1' to="/about">Categories </NavLink>
                                        <NavLink className='navlink_design1' to="/catalog">Authors </NavLink>
                                        <NavLink className='navlink_design1' to="/searchcatalog">Publishers</NavLink>
                                        <NavLink className='navlink_design1' to="/searchcatalog">Tags</NavLink>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </Container>
                    </Navbar>
                </Container>
            </div>
        </div>
    );
};

export default Catalog;