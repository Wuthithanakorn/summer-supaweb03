import React from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate, useLoaderData } from 'react-router-dom';
import ProductCard from '../component/productCard';

export default function Product() {
  const data = useLoaderData()
  const navigate = useNavigate()

  return (
    <Container fluid>
      <Row>
        <Col className='m-4 '>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.products.map(p => (
                  <tr>
                    <td> {p.id} </td>
                    <td> {p.title} </td>
                    <td> {p.description} </td>
                    <td> ${p.price} </td>
                    <td> <Button variant="success" onClick={()=> navigate(`/product/${p.id}`, {state:{...p}})}> Detail </Button> </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex flex-wrap gap-4 justify-content-center' >
          {
            data.products.map(p => (<ProductCard key={p.id} {...p} />))
          }
        </Col>
      </Row>
    </Container>
  )
}

