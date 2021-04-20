import React from 'react'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row';
// import Card from 'react-bootstrap/Card';
import axios from "axios";
import {
      Card, Button, CardHeader, CardFooter, CardBody, CardText, CardTitle
} from 'reactstrap';

function Park(props) {


      const {location, numberDucks, time, numberFoods, food, id } = props

      const handleDelete = () => {
            axios.delete(`/park/${id}`)
                  .then(res => {
                        let response = res.data;
                        return response
                  })
                  .then(data => {

                        if (data.success)
                              alert(`Location ${location} successfully deleted! Please refresh the page !`)
                        else
                              alert('Sorry,Network error.');
                  });


      }


      return (

                        <Card style={{ width: '21rem' }}>
                              <CardHeader>Location: {location}</CardHeader>
                                    <CardBody>

                                          <CardTitle  className="d-flex align-items-start flex-column">
                                                <h5>Number of ducks are fed: {numberDucks} </h5>
                                                <h5>What kind of food: {food}</h5>
                                                <h5>How many food: {numberFoods}</h5>
                                          </CardTitle>
                                          <Button onClick = {handleDelete} >Delete</Button>
                                    </CardBody>
                              <CardFooter className="d-flex align-items-end flex-column">
                                          <p>Date: {time.slice(0,10)}</p>
                                          <p>Time: {time.slice(11,)}</p>
                              </CardFooter>
                        </Card>





      )
}

export default React.memo(Park);

