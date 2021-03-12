import React from 'react'
import { Card } from 'react-bootstrap'

function Product(props) {
    return (
        <div>
            <Card className='my-3 p-3 rounded'>
                <Card.Img variant="top" src={props.product.image} />
                <Card.Body>
                    <Card.Title as='div'>
                        <strong>{props.product.name}</strong>
                    </Card.Title>
                    <Card.Text as='h3'>{props.product.price}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product
