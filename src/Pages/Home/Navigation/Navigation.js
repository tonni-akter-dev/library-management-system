import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navigation.css';
const Navigation = () => {
    const { user, logout } = useAuth();

    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    return (
        <div>
            <div className='notice_board'>
                <Container className='link_style'>
                    <div>
                        <span className='office_info'><i class="fas fa-envelope"></i> library@pu.edu.bd</span>
                        <span className='office_info'><i class="fas fa-phone"></i> +8801766554433</span>
                    </div>
                    <Link to="/" className='notice'>Notice Board</Link>
                </Container>
            </div>
            <Navbar className="nav_bg" expand="lg">
                <Container>
                    <NavLink className='navlink_design' to="/"><img height="50px"
                     src="https://i.ibb.co/y48PY0V/pu-logo-1.png" alt="" /> Presidency University Library
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className='navlink_design1' to="/">Home</NavLink>
                            <NavLink className='navlink_design1' to="/login">About </NavLink>
                            <NavLink className='navlink_design1' to="/login">Catalog </NavLink>
                            <NavLink className='navlink_design1' to="/dashboard">Dashboard</NavLink>
                            <NavDropdown
                                className="navDesign1"
                                id="basic-nav-dropdown"
                                title={
                                    <span className="navlink_design1">Resources</span>
                                }
                                show={show}
                                onMouseEnter={showDropdown}
                                onMouseLeave={hideDropdown}
                            >
                                <NavDropdown.Item to="/login">
                                    <NavLink
                                        className=""
                                        style={{ color: "black", textDecoration: "none" }}
                                        to="/login"
                                    >
                                        Printed Books
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item to="/login">
                                    <NavLink
                                        className=""
                                        style={{ color: "black", textDecoration: "none" }}
                                        to="/login"
                                    >
                                        eBooks
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item to="/login">
                                    <NavLink
                                        className=""
                                        style={{ color: "black", textDecoration: "none" }}
                                        to="/login"
                                    >
                                        Magazines
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item to="/login">
                                    <NavLink
                                        className=""
                                        style={{ color: "black", textDecoration: "none" }}
                                        to="/login"
                                    >
                                        NewsPapers
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item to="/login">
                                    <NavLink
                                        className=""
                                        style={{ color: "black", textDecoration: "none" }}
                                        to="/login"
                                    >
                                        Thesis
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                            {
                        user?.email ?
                            <div>
                                 {/* <NavLink className='navlink_design1' to="/">Dashboard</NavLink> */}
                                 <NavLink  onClick={logout} className='navlink_design1' to="/">Logout</NavLink>
                                {/* <Button onClick={logout} color="inherit">Logout</Button> */}
                            </div>
                            :
                            <NavLink className='navlink_design1' to="/login">Login</NavLink>
                    }

                            <NavLink className='navlink_design1' to="/login">Ask a librarian?</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;