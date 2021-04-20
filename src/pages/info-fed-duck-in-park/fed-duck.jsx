import React from 'react'
import FormInput from '../../components/form-input-for-duck-fed/inputForm'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
export default function fedDuck() {
      return (
            <Container >
                  <Row className="d-flex justify-content-center">
                        <h1> Input your data about your duck fed activity </h1>
                  </Row>
                  <Row className="d-flex justify-content-center">

                        <FormInput/>
                  </Row>
            </Container>
      )
}
