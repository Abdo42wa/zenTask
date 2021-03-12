import React,{useEffect, useState} from 'react'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import axios from 'axios'

export const NavigationBar = () => {
  const [categorys,setCategory] = useState([]);
  const [subcategorys,setSubCategory] = useState([]);
    useEffect( async() => {

      const {data} = await axios.get('/api/category/all/category');

      setCategory(data);
    
    }, [])

  const handleClick = async (parentID) => {

    const {data} = await axios.get('/api/category/subcategorys',{
      params:{
        parentID:parentID
      }
    })
    setSubCategory(data); 
   }


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Test Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto py-3">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/manager">Manager</Nav.Link>

            {categorys.map((category) =>  (
             
              <NavDropdown  title={category.name} key={category._id} id="basic-nav-dropdown" onClick={() => handleClick(category._id)}>
              {subcategorys.map((subCategory) => (
                      <NavDropdown.Item href={'/' + subCategory.name } key={subCategory._id}>{subCategory.name}
                      </NavDropdown.Item>
                    
                    ))}
              </NavDropdown>

             
            ))}

            
    
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
