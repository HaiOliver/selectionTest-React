import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

export default function Park(props) {
      //console.log("🚀 ~ file: park.jsx ~ line 7 ~ Park ~ props", props)

      const {location,numberDucks,time,numberFoods,food } = props
      return (
            <Container>
                  <Row>
                        <Card border="info" style={{ width: '21rem' }} bg={"Light".toLowerCase()}>
                              <Card.Header>
                                    <h2>
                                          Location: {location}
                                    </h2>
                              </Card.Header>
                              <Card.Body>
                                    <Card.Title>
                                          <h4>Time: {time}</h4>
                                          <h4>Number of ducks are fed: {numberDucks} </h4>
                                          <h4>What kind of food: {food}</h4>
                                          <h4>How many food: {numberFoods}</h4>
                                    </Card.Title>

                              </Card.Body>
                        </Card>


                  </Row>
            </Container>
      )
}

