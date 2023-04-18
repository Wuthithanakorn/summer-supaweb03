import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {FaFacebook, FaInstagram , FaYoutube ,FaTwitter,FaPhoneAlt, FaEnvelope} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Footer() {
    return (
        <Container fluid>
            <Row className='bg-info'>
                <Col className='d-flex justify-content-center m-3'>
                    <FaFacebook size={30} className='mx-2'/>
                    <FaInstagram size={30} className='mx-2'/>
                    <FaYoutube size={30} className='mx-2'/>
                    <FaTwitter size={30} className='mx-2'/>
                </Col>
                <Col className='m-3'>
                    <h3> CONTACT US </h3>
                    <h5><FaPhoneAlt size={18} className='mx-2'/>098-745-6321 </h5>
                    <h5><FaEnvelope size={18} className='mx-2'/>Evza@gmail.com </h5>
                </Col>
                <Col className='m-3'>
                    <h3> COMPANY </h3>
                    <h5>  90/1 Roi Et, Phochi Akakom, 45230 </h5>
                </Col>
                <Col className='m-3'>
                    <h3>SUPPORT</h3>
                    <h5>Help & FAQ</h5>
                    <h5>Terms & Conditions</h5>
                    <h5>Privacy Policy</h5>
                </Col>
            </Row>
            <Row className='bg-info'>
                <Col className='d-flex justify-content-center'>
                    <h3> © 2023 Evza. All rights reserved. </h3>
                </Col>
            </Row>
        </Container>
    )
}
