import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function FormInput() {
      return (
            <Form>
                  <Form.Group controlId="formBasicEmail">
                        <Form.Label>Location Park</Form.Label>
                        <Form.Control type="text" placeholder="Type here ..." />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                        <Form.Label>What time the duck are fed ?</Form.Label>
                        <Form.Control type="text" placeholder="Type here ..." />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                        <Form.Label>How many ducks are fed ?</Form.Label>
                        <Form.Control type="text" placeholder="Type here ..." />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                        <Form.Label>What food the duck are fed ?</Form.Label>
                        <Form.Control type="text" placeholder="Type here ..." />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                        <Form.Label>How many food the duck are fed ?</Form.Label>
                        <Form.Control type="text" placeholder="Type here ..." />
                  </Form.Group>

                  <Button variant="success" type="submit">
                        Submit
                  </Button>

            </Form>
      )
}