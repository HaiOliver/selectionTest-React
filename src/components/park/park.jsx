import React from 'react'

import axios from "axios";
import {
      Card, Button, CardHeader, CardFooter, CardBody, CardTitle, Container
} from 'reactstrap';
import "./park.css"

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
                        {
                              alert(`Location ${location} successfully deleted ! Page will automatically refresh !`)
                              // ! redirect to Homepage
                              window.location.reload();
                        }
                        else{
                              alert('Sorry,Network error.');}
                  });




      }


      return (
                        <Card  className="park" body outline color="info">
                              <CardHeader>
                                    <Container className="title-location">
                                          <h4>
                                          Location: <span className="location">{location}</span>
                                          </h4>
                                    </Container>
                                    
                                    </CardHeader>
                                    <CardBody>

                                          <CardTitle  className="d-flex align-items-start flex-column">
                                                 <Container className="container-info">
                                                <h5>Number of ducks are fed: <span className="numberDucks">{numberDucks}</span> </h5>

                                                <h5 >What kind of food: <span className="food">{food}</span></h5>


                                                <h5>How many food: <span className="numberFoods">{numberFoods}</span></h5>
                                                </Container>
                                          </CardTitle>
                                          <Button onClick = {handleDelete} >Delete</Button>
                                    </CardBody>
                              <CardFooter className="d-flex align-items-end flex-column">
                                          <p>Time created at: <span className="hour">{time.slice(11,)}</span></p>
                                          <p>Date created on: <span className="date">{time.slice(0,10)}</span></p>

                              </CardFooter>
                        </Card>





      )
}

export default React.memo(Park);

