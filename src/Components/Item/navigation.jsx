import React from 'react';
import {
    Navbar,
    Nav,
    // Form,
    Container
} from "react-bootstrap";

function navigation() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="/add">Add</Nav.Link>
                        <Nav.Link href="#pricing">Update</Nav.Link>
                        <Nav.Link href="#pricing">Delete</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default navigation
