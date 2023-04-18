import React from 'react'
import { Container, Row, Col, Carousel, Card ,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <Container fluid>
      <Row className='m-3'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/300/200?random=1"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>First slide label</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/300/200?random=2"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1>Second slide label</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/300/200?random=3"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>Third slide label</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row>
        <Col className='m-3 d-flex justify-content-center'>
        <Card >
          <Card.Img variant="top" src="http://picsum.photos/300/200?random=4" />
          <Card.Body>
            <Card.Title>Category</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="outline-primary">View</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col className='m-3 d-flex justify-content-center'>
        <Card >
          <Card.Img variant="top" src="http://picsum.photos/300/200?random=5" />
          <Card.Body>
            <Card.Title>Products</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="outline-primary">View</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col className='m-3 d-flex justify-content-center'>
        <Card >
          <Card.Img variant="top" src="http://picsum.photos/300/200?random=6" />
          <Card.Body>
            <Card.Title>About</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="outline-primary">More</Button>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  )
}
