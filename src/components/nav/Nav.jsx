import React from 'react'
import { Navbar, Container, Button, Nav, Form, FormControl } from "react-bootstrap";
import Contact from '../contact/Contact';
import Task from '../task/Task'
import './Nav.css'

const Navapp = () => {
    const contactForm = () => {
        {
            console.log('hi')
        }

        < Contact />
    }
    const taskForm = () => {
        {
            console.log('hi Task')
        }
        <Task />
    }
    return (
        <Navbar bg="info" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Calender App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" onClick={contactForm}>New Contact</Nav.Link>
                        <Nav.Link href="#action2" onClick={taskForm}>New Task</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-dark">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navapp
