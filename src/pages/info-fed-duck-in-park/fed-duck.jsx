import React from 'react'
import FormInput from '../../components/form-input-for-duck-fed/inputForm'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
export default function fedDuck() {
      return (
            <Container >
                  <Row className="d-flex justify-content-center">
                        <h1> Input your data about your duck fed activity </h1>
                  </Row>
                  <Row className="d-flex justify-content-center">
                        <FormInput/>
                  </Row>
                  <Row className="d-flex justify-content-center m-3">
                        <Link to="/" style={{textDecoration: "none"}}>
                              <Button variant="info">See all locations</Button>
                        </Link>
                  </Row>
            </Container>
      )
}
