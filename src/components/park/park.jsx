import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

export default function Park() {
      return (
            <Container>
                  <Row>
                        <Card border="dark" style={{ width: '21rem' }}>
                              <Card.Header>
                                    <h2>
                                          Location: test
                                    </h2>
                              </Card.Header>
                              <Card.Body>
                                    <Card.Title>
                                          <h4>Time: 10PM</h4>
                                          <h4>Number of ducks are fed: 100 </h4>
                                          <h4>What kind of food: bread</h4>
                                          <h4>How many food: 1kg</h4>
                                    </Card.Title>

                              </Card.Body>
                        </Card>


                  </Row>
            </Container>
      )
}

