import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Park from '../../components/park/park';
export default function listParks() {
      return (
            <Container>
                  <Row>
                        <Park/>
                  </Row>
            </Container>
      )
}
