import React,{useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Park from '../../components/park/park';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import {Link} from 'react-router-dom';
import './list-parks.css';

function ListParks() {
      const [ parks, setParks] = useState([]);
      useEffect(() => {
            const fetch_data_from_DB = async ()=>{
            let result = await axios.get('/allParks');

                  // ! set state for array Parks
                  setParks(result.data)

            }
            fetch_data_from_DB();
      },[])

      // ! render park in browser

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
                              <h1 className = "big-header">
                                    All locations for ducks-fed list below
                              </h1>

                  </Row>
                  <Row className="d-flex justify-content-center">
                        <Link to="/selectionTest-React/infoDuckFed" style={{textDecoration: "none"}}>
                              <button className="add-new-park">Add new data</button>
                        </Link>
                  </Row>
                  <Row>

                        <Container className = "d-flex flex-wrap align-items-lg-start align-content-center ">
                                    {renderParks}
                        </Container>

                  </Row>




            </Container>
      )
}


export default React.memo(ListParks);