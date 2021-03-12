import React, { useState, useEffect, Link } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
import Product from '../components/Product.js';


function HomeScreen() {
    //useState initial value of useState is products, second is function to update initial value(setProducts)
    const [products, setProducts] = useState([]);//by default its empty array
    //useEffect is called as soon as component is created
    useEffect(async () => {//async becouse we'll want to use await
        const getProducts = async function () {
            //we want to get only data with that request
            const { data } = await axios.get('/api/products')
            return data;
        }

        const allProducts = await getProducts();
        setProducts(allProducts)
    }, [])

    return (
        <Container>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                        <Product product={product} />
                    </Col>
                ))}
            </Row>


        </Container>
    )
}

export default HomeScreen
