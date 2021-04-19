import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Park from '../../components/park/park';
import Col from 'react-bootstrap/Col'
export default function listParks() {
      return (
            <Container >
                  <Row>
                        <Col>
                              <h1>
                               All parks that fed ducks list below
                              </h1>
                        </Col>
                  </Row>
                  <Row>
                        <Col  xs={12} md={3}>
                              <Park/>
                        </Col>
                        <Col xs={12} md={3}>
                              <Park/>
                        </Col>
                        <Col xs={12} md={3}>
                              <Park/>
                        </Col>

                        <Col xs={12} md={3}>
                              <Park/>
                        </Col>

                  </Row>
            </Container>
      )
}
