import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Logo from '../../components/Illustrations/Admin.svg';
export class loading extends Component {
      render() {
            return (
                  <Container className="justify-content-center">
                        <Row>
                              <img src={Logo} height={600} alt="error"/>
                        </Row>
                        <Row  className="justify-content-center">
                              <Spinner animation="grow" variant="primary" />
                              <Spinner animation="grow" variant="secondary" />
                              <Spinner animation="grow" variant="success" />
                              <Spinner animation="grow" variant="danger" />
                              <Spinner animation="grow" variant="warning" />
                              <Spinner animation="grow" variant="info" />
                              <Spinner animation="grow" variant="light" />
                              <Spinner animation="grow" variant="dark" />

                        </Row>
                        <Row className="justify-content-center">
                              <h1>App Loading .....</h1>
                        </Row>

                  </Container>
            )
      }
}

export default loading
