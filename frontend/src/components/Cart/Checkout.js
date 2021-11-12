import React, { Component } from 'react';
import { Col, Row,  Container } from 'react-bootstrap';
import './Cart.css'
import './wizard-stepper.css'
import Book1 from '../pictures/book1.png'



export default class Checkout extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();

    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="checkout">
                <div className="card">
                    <div className="card-header">
                        <div className="steps">
                            <div className="step-active"><span className="step-active-span">Check-out</span></div>
                            <div className="step"><span className="step-span">Shipping</span></div>
                            <div className="step"><span className="step-span">Payment</span></div>
                            <div className="step"><span className="step-span">Review</span></div>
                            <div className="step"><span className="step-span">Confirmation</span></div>
                        </div>
                    </div>
                </div>
                <br/>
                <h1 className="centered_title"> Check-out Information </h1> <br/>
                <section className="subHeader">
                    <Container>
                        <center>
                            <Row>
                                <Col>
                                    <h5><b>Total items:</b> </h5>
                                </Col>
                                <Col>
                                    <button className="button button-changeStep" id="proceedShipping" onClick={this.continue}>Proceed to Shipping</button>
                                </Col>
                                <Col>
                                    <h5><b>Subtotal:</b> </h5>
                                </Col>
                            </Row>
                        </center>
                    </Container>
                </section>
                <br/><br/>
                <section >
                    <Container>
                        <div className="card">
                            <Row>
                                <Col xs lg={3}>
                                    <br/>
                                    <center><img width={175} height={250}  src={Book1} /></center>
                                    <br/>
                                </Col>
                                <Col xs lg={7}>
                                    <body>
                                    <br/>
                                        <Row>
                                            <h1>A Court of Mist and Fury</h1>
                                        </Row>
                                        <Row>
                                            <p><b>Sold by username1234</b></p>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <h3>Description:</h3>
                                            <p>Lorem ipsum</p>
                                        </Row>
                                    </body>
                                </Col>
                                <Col xs lg={2}>
                                    <center >
                                        <br/>
                                        <h1>15€</h1>
                                        <button className="button button-erase">ERASE</button>
                                    </center>
                                </Col>
                            </Row>
                        </div>
                        <br/>
                    </Container>
                </section>
            </div>
        )
    }
}