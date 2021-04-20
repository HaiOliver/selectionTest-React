import React,{useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Park from '../../components/park/park';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
function ListParks() {
      const [ parks, setParks] = useState([]);

      const [loading, setLoading] = useState(true)

      useEffect(() => {
            const fetch_data_from_DB = async ()=>{
            let result = await axios.get('/allParks');

                  // ! set state for array Parks
                  setParks(result.data)
                  setLoading(false)
            }
            fetch_data_from_DB();
      },[])

      // ! render park in browser

      console.log(parks);
      const renderParks = parks.map((eachPark,indx) =>

                        <Col key = {indx} className="p-3">
                                          <Park
                                                location = {eachPark.location}
                                                numberDucks = {eachPark.number_of_duck}
                                                time={eachPark.time_fed}
                                                numberFoods = {eachPark.number_of_food}
                                                food = {eachPark.food}
                                                id = {eachPark.id}

                                          />
                        </Col>


      )



      return (
            <Container fluid >
                  <Row className="d-flex justify-content-center">
                              <h1>
                               All parks that fed ducks list below
                              </h1>

                  </Row>
                  <Row className="d-flex justify-content-center">
                        <Link to="/infoDuckFed" style={{textDecoration: "none"}}>
                              <Button variant="info">Add new Park</Button>
                        </Link>
                  </Row>
                  <Row>

                        {loading
                        ? (
                              <Container>
                                    <h3>Please wait .. !</h3>
                                    <Spinner animation="grow" variant="primary" />
                                    <Spinner animation="grow" variant="secondary" />
                                    <Spinner animation="grow" variant="success" />
                                    <Spinner animation="grow" variant="danger" />
                                    <Spinner animation="grow" variant="warning" />
                                    <Spinner animation="grow" variant="info" />
                                    <Spinner animation="grow" variant="light" />
                                    <Spinner animation="grow" variant="dark" />
                              </Container>

                        )
                        : (

                              <Container className = "d-flex flex-wrap align-items-lg-start align-content-center ">
                                     {renderParks}
                              </Container>

                        )}
                  </Row>




            </Container>
      )
}


export default React.memo(ListParks);