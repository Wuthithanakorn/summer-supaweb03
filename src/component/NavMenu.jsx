import React from 'react'
import{ Navbar , Container  , Nav  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaHome } from 'react-icons/fa'
import { NavLink , Link} from 'react-router-dom';

export default function NavMenu() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <FaHome size={20}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            navbarScroll
                        >     
                            <Nav.Link><NavLink as={NavLink} to={''}> Home </NavLink></Nav.Link>
                            <Nav.Link><NavLink as={NavLink} to={'category'}> Category </NavLink></Nav.Link>
                            <Nav.Link><NavLink as={NavLink} to={'product'}> Product </NavLink></Nav.Link>
                            <Nav.Link><NavLink as={NavLink} to={'order'}> Order </NavLink></Nav.Link>                       
                        </Nav> 
                        <Nav className='justify-contain-end'>
                            <Nav.Link as={NavLink} to={'about'}>About</Nav.Link>
                            <Nav.Link as={NavLink} to={'login'}>Login</Nav.Link>
                        </Nav> 
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
