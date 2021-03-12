import React,{useState,useEffect} from 'react';
import axios from 'axios'

import {Container,Form,Button} from 'react-bootstrap'

 const Manager = () => {
    const [categorys,setCategory] = useState([]);
    useEffect( async() => {

        const {data} = await axios.get('/api/category/all/category');
  
        setCategory(data);
      
      }, [])
    return (
        <Container>
                    <h1> Create a subCategory </h1>
            <Form action="/create/subcategory" method="post">
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                {categorys.map((catagory) =>(
                    <option name="parentID" >{catagory.name} {console.log(catagory._id)}</option>
                    
                ))}
                </Form.Control>
            </Form.Group>

                <Form.Group controlId="formBasic">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name"  name="name"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Manager;
