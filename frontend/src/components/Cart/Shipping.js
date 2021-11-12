import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ShippingPhoto from "../pictures/shipping.jpg";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './Cart.css'

export default class Shipping extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <div className="steps">
                            <div className="step-done"><span className="step-done-span">Check-out</span></div>
                            <div className="step-active"><span className="step-active-span">Shipping</span></div>
                            <div className="step"><span className="step-span">Payment</span></div>
                            <div className="step"><span className="step-span">Review</span></div>
                            <div className="step"><span className="step-span">Confirmation</span></div>
                        </div>
                    </div>
                </div>
                <br/>
                <Container>
                    <Row>
                        <Col md={"auto"}>
                            <ArrowBackIosNewIcon className="arrowBack" onClick={this.back}/>
                        </Col>
                        <Col >
                            <h1 className="centered_title">Shipping Information</h1>
                        </Col>
                    </Row>
                </Container>
                <section>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col  xs lg="5">
                                <br/><br/>
                                <h4>Rellena todos los campos, por favor.</h4>
                                <br/>
                                <form action="">
                                    <div className="input-field">
                                        <input type="text" id="nombre" onChange={this.handleChange} required/>
                                        <label htmlFor="nombre">Nombre</label>
                                    </div>
                                    <br/>
                                    <div className="input-field">
                                        <input type="text" id="apellidos" onChange={this.handleChange} required/>
                                        <label htmlFor="apellidos">Apellidos</label>
                                    </div>
                                    <br/>
                                    <div className="input-field">
                                        <input type="email" id="email" onChange={this.handleChange} required/>
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <br/>
                                    <div className="input-field">
                                        <input type="text" id="direccion" onChange={this.handleChange} required/>
                                        <label htmlFor="direccion">Dirección</label>
                                    </div>
                                    <br/>
                                    <div className="input-field">
                                        <input type="text" id="ciudad" onChange={this.handleChange} required/>
                                        <label htmlFor="ciudad">Ciudad</label>
                                    </div>
                                    <br/>
                                    <div className="input-field">
                                        <input type="text" id="pais" onChange={this.handleChange} required/>
                                        <label htmlFor="pais">País</label>
                                    </div>
                                    <br/>
                                    <div className="input-field">
                                        <input type="number" id="codigoPostal" onChange={this.handleChange} required/>
                                        <label htmlFor="codigoPostal">Código Postal</label>
                                    </div>
                                </form>
                                <br/>
                                <button className="button-changeToPayment" onClick={this.continue} id="proceedPayment">Proceed to Payment</button>
                            </Col>
                            <Col md={"auto"}>
                                <br/><br/>
                                <div className="vl"/>
                                <br/><br/>
                            </Col>
                            <Col xs lg={5}>
                                <center>
                                    <br/><br/>
                                    <img className="img-shipping" src={ShippingPhoto} width={525} height={500} alt="img-shipping"/>
                                </center>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

