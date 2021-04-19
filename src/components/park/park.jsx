import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

export default function Park() {
      return (
            <Container>
                  <Row>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                        <Card.Title>Location: test</Card.Title>
                        <Card.Text>
                              <h3>Time: 10PM</h3>
                              <h3>Number of ducks are fed: 100 </h3>
                              <h3>What kind of food: bread</h3>
                              <h3>How many food: 1kg</h3>
                              
                        </Card.Text>
                        </Card.Body>
                        {/* <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup> */}

                        </Card>
                  </Row>
            </Container>
      )
}

