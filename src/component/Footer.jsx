import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {FaFacebook, FaInstagram , FaYoutube ,FaTwitter} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Footer() {
    return (
        <Container>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <FaFacebook size={30} className='mx-2'/>
                    <FaInstagram size={30} className='mx-2'/>
                    <FaYoutube size={30} className='mx-2'/>
                    <FaTwitter size={30} className='mx-2'/>
                </Col>
                <Col>
                    <h3> CONTACT US </h3>
                    <h5> Phone : 0987456321 </h5>
                    <h5> Gmail : Evza@gmail.com </h5>
                </Col>
                <Col>
                    <h3> COMPANY </h3>
                </Col>
                <Col>
                    <h3> HELP </h3>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <h3> © 2023 Evza. All rights reserved. </h3>
                </Col>
            </Row>
        </Container>
    )
}
