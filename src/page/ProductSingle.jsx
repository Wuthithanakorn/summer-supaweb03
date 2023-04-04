import React, { useEffect, useState } from 'react'
import { useParams ,useLocation} from 'react-router-dom'
import { Container, Row ,Col ,Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './Product'
import ProductCard from '../component/productCard'

export default function ProductSingle() {

    const location = useLocation()
    const [product, setProduct] = useState([])
    const {id} = useParams()
    useEffect(() => {
      /*async function fetchProduct() {
          await fetch(`https://dummyjson.com/products/${id}`)
                .then(res=> res.json())
                .then(data=> setProduct(data))
      }
      fetchProduct()*/
      setProduct(location.state)
    }, [])
    
  return (
    <Container fluid className='vh-100'>
      <Row>
        <Col ms={6} className='d-flex justify-content-center'>
          <Card>
              <ProductCard {...product}/>
              { JSON.stringify(location.state)}
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
