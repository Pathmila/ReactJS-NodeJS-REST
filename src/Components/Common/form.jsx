import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'

function form() {
    return (
        <div>
            <Container>
                <Form align="center">  
                    <h1>Add Item</h1><br />           
                    <input 
                        type="text"                    
                        placeholder="Item Name"
                    /><br /><br />
                    <input 
                        type="text"
                        placeholder = 'price'
                    /><br /><br />
                    <Button type="submit">Submit</Button><br /><br />
                </Form>
            </Container>
        </div>
    )
}

export default form
