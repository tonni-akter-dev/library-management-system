import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div className='mt-5'>
            <Container>
                <Row lg={12}>
                    <Col lg={4} xs={12}>
                        <NavLink className='navlink_design text-center' to="/">
                            <img height="60px" className=''
                            src="https://i.ibb.co/y48PY0V/pu-logo-1.png" alt="" />
                        </NavLink>
                    </Col>


                </Row>
            </Container>


        </div>
    );
};

export default Footer;