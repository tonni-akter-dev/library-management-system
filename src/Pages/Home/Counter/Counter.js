import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import './Counter.css'
const Counter = () => {
    return (
        <div className='text-center mt-5'>
            <div>
                <h2>Presidency University Library Collections</h2>
                <Container>
                    <Row lg={12}>
                        <Col lg={3} className="counter_column">
                            <h1>
                                <CountUp end={200} />
                            </h1>
                            <h4>Total Books</h4>
                        </Col>
                        <Col lg={3} className="counter_column">
                            <h1>
                                <CountUp end={200} />
                            </h1>
                            <h4>Total Books</h4>
                        </Col>
                        <Col lg={3} className="counter_column">
                            <h1>
                                <CountUp end={200} />
                            </h1>
                            <h4>Total Books</h4>
                        </Col>
                        <Col lg={3} className="counter_column">
                            <h1>
                                <CountUp end={200}/>
                            </h1>
                            <h4>Total Books</h4>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default Counter;