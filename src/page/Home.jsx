import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae vel molestias quis doloribus tenetur, aperiam sit. Nihil sapiente eum minus sit consectetur hic, animi, iste fuga, adipisci porro a!
        </Col>
        <Col>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quo commodi voluptatem doloremque sapiente accusamus quisquam facilis soluta recusandae ratione? Voluptates est aperiam modi nam saepe dolor vero omnis quaerat?</Col>
      </Row>
      <Row>
        <Col >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo aspernatur praesentium provident at maiores eaque, doloribus et incidunt quo eveniet numquam laboriosam nostrum voluptatem saepe obcaecati qui vitae, quas accusamus?
        </Col>
        <Col sm={6} className='d-flex justify-content-center'>
          <img src="http://picsum.photos/300/200?random=1" alt="" />
        </Col>
        <Col>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eveniet necessitatibus deleniti, id tempore aperiam enim dolores deserunt ea molestiae nulla libero nesciunt, odit est animi facilis, corrupti soluta obcaecati.
        </Col>
      </Row>
    </Container>
  )
}
