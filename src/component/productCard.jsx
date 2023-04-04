import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function productCard(props) {
    const { id, title, description, thumbnail, price } = props
    const navigate = useNavigate()
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    ${price}
                </Card.Text>
                <Button variant="success" onClick={() => navigate(`/product/${id}`)} >Sell</Button>
            </Card.Body>
        </Card>
    )
}
