import React,{useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Park from '../../components/park/park';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
export default function ListParks() {
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

      // ! split array parks into chunk of 4
      const chunk = (arr, size) => arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);

      const arrangedArray = chunk(parks,4)


      // ! render park in browser
      const renderParks = arrangedArray.map((eachRow,indx) => {
            return(
                  <Row key = {indx}>
                        {
                              eachRow.map((eachPark,index) => {
                                    <Col key = {index}>
                                          <Park
                                                location = {eachPark.location}
                                                numberDucks = {eachPark.number_of_duck}
                                                time={eachPark.time_fed}
                                                numberFoods = {eachPark.number_of_food}
                                                food = {eachPark.food}

                                          />
                                    </Col>
                              })
                        }
                  </Row>
                  )

      })
      console.log("🚀 ~ file: list-parks.jsx ~ line 55 ~ renderParks ~ renderParks", renderParks)


      return (
            <Container >
                  <Row>
                              <h1>
                               All parks that fed ducks list below
                              </h1>
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
                              // <Row>
                              //       <Col  xs={12} md={3}>
                              //             <Park/>
                              //       </Col>
                              //       <Col xs={12} md={3}>
                              //             <Park/>
                              //       </Col>
                              //       <Col xs={12} md={3}>
                              //             <Park/>
                              //       </Col>

                              //       <Col xs={12} md={3}>
                              //             <Park/>
                              //       </Col>

                              // </Row>

                              {renderParks}


                        )}
                  </Row>


            </Container>
      )
}
