import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation2 from '../../Navigation/Navigation2/Navigation2';
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
                <Container className="catalog-nav1 mt-3">
                    <Navbar expand="lg">
                        <Container className="catalog-nav">
                            <div>
                                <h2>Catalog</h2>
                            </div>
                            <div>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav>
                                        <NavLink className='navlink_design3 nav_bg_2' to="/search_catalog">Search Catalog</NavLink>
                                        <NavLink className='navlink_design3 nav_bg_2' to="/catagories">Categories </NavLink>
                                        <NavLink className='navlink_design3 nav_bg_2' to="/authors">Authors </NavLink>
                                        <NavLink className='navlink_design3 nav_bg_2' to="/publishers">Publishers</NavLink>
                                        <NavLink className='navlink_design3 nav_bg_2' to="/tags">Tags</NavLink>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>

                        </Container>
                    </Navbar>
                    {/* table  */}
                    <div>
                        <table className="table">
                            <thead className="thead-dark bg-dark text-light">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Authors/Editors</th>
                                    <th scope="col">Publisher</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Copies</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img height="100px" src="https://i.ibb.co/rt6jKvg/cover.png" alt="" />
                                    </td>
                                    <td><span className='text_bold'>Companies act, 1994 (Authentic English Text)  </span>
                                         <br />
                                        <span>Year: 1995 </span> <br />
                                        <span>Call No: 346.067 COM 1995 ENG </span>
                                    </td>
                                    <td>Ministry of Commerce,Bd</td>
                                    <td></td>
                                    <td>Books</td>
                                    <td>2</td>
                                </tr>
                               
                                <tr>
                                    <td>
                                        <img height="100px" src="https://i.ibb.co/rt6jKvg/cover.png" alt="" />
                                    </td>
                                    <td>Companies act, 1994 (Authentic English Text)   <br />
                                        <span>Year: 1995 </span> <br />
                                        <span>Call No: 346.067 COM 1995 ENG </span>
                                    </td>
                                    <td>Ministry of Commerce,Bd</td>
                                    <td></td>
                                    <td>Books</td>
                                    <td>2</td>
                                </tr>
                               
                                <tr>
                                    <td>
                                        <img height="100px" src="https://i.ibb.co/rt6jKvg/cover.png" alt="" />
                                    </td>
                                    <td>Companies act, 1994 (Authentic English Text)   <br />
                                        <span>Year: 1995 </span> <br />
                                        <span>Call No: 346.067 COM 1995 ENG </span>
                                    </td>
                                    <td>Ministry of Commerce,Bd</td>
                                    <td></td>
                                    <td>Books</td>
                                    <td>2</td>
                                </tr>
                               
                          
                   
                               
                            </tbody>
                        </table>
                    </div>

     
                </Container>
            </div>
        </div>
    );
};

export default Catalog;