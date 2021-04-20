import React,{useState} from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DateTimePicker from 'react-datetime-picker';
export default function FormInput() {

      const [time, onChangeTime] = useState(new Date());
      const [ location, setLocation] = useState("")

      const [ numberDucks, setNumberDucks] = useState("")
      const [ numberFoods, setNumberFoods] = useState("")
      const [ foods, setFoods] = useState("")


      // ! Set field
      const handleLocation = (value) => {
            setLocation(value)
      }

      const handleFoods = (value) => {
            setFoods(value)
      }

      const handleNumberDucks = (value) => {
            if(isNaN(value)){
                  alert("please input a number !!")
            }

            setNumberDucks(value)
      }

      const handleNumberFoods = (value) => {
            if(isNaN(value)){
                  alert("please input a number !!")
            }
            setNumberFoods(value)
      }

      // ! Handle Submit
      const handleSubmit = (e) => {
            e.preventDefault()
            if(location === "" || foods === "" || numberDucks === "" || numberFoods === "" || time === "" ){
                  alert("There is empty field. Please enter data !!")
                  return
            }
            const data = {
                  location,
                  number_of_duck: numberDucks,
                  number_of_food : numberFoods,
                  time_fed:time,
                  food:foods
                    };


            axios.post("/addNewPark",data)
                  .then((response) => {
                              console.log("🚀 ~ file: inputForm.jsx ~ line 57 ~ .then ~ response", response)
                              alert("Park successfully added!");
                                    })
                  .catch((error) => {
                              console.log("🚀 ~ file: inputForm.jsx ~ line 61 ~ handleSubmit ~ error", error)
                              alert('Sorry, park cannot be added. Network error.');
                                    })

            // ? do post request here
      }

      console.log("time will be: ", time);

      return (
            <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicLocation">
                        <Form.Label className="text-left" style={{width: "100%"}}>
                              <h3>
                                    Location Park
                              </h3>

                        </Form.Label>

                              <Form.Control
                              type="text"
                              placeholder="Type here ..."
                              size="lg"
                              onChange={ e => handleLocation(e.target.value)}
                               />


                  </Form.Group>

                  <Form.Group controlId="formBasicTime">
                        <Form.Label className="text-left" style={{width: "100%"}}>
                              <h3>
                                    What time the duck are fed ?
                              </h3>


                        </Form.Label>

                        <div className="text-left" style={{width: "100%"}}>
                              <DateTimePicker
                              onChange={onChangeTime}
                              value={time}

                              />
                        </div>


                  </Form.Group>

                  <Form.Group controlId="formBasicDucks">
                        <Form.Label className="text-left" style={{width: "100%"}}>
                              <h3>
                                    How many ducks are fed ?
                              </h3>

                        </Form.Label>
                        <Form.Control
                              type="text"
                              size="lg"
                              placeholder="Type here ..."
                              onChange={ e =>  handleNumberDucks(e.target.value)}
                              />
                  </Form.Group>

                  <Form.Group controlId="formBasicFoods">
                        <Form.Label className="text-left" style={{width: "100%"}}>
                              <h3>
                                    What food the duck are fed ?
                              </h3>

                        </Form.Label>
                        <Form.Control
                              type="text"
                              size="lg"
                              placeholder="Type here ..."
                              onChange={ e => handleFoods(e.target.value)}
                              />
                  </Form.Group>

                  <Form.Group controlId="formBasicNumberFoods">
                        <Form.Label className="text-left" style={{width: "100%"}}>
                              <h3>
                                       How many food the duck are fed ?
                              </h3>


                        </Form.Label>
                        <Form.Control
                              type="text"
                              size="lg"
                              placeholder="Type here ..."
                              onChange={ e => handleNumberFoods(e.target.value)}
                              />
                  </Form.Group>

                  <Button variant="success" type="submit">
                        Submit
                  </Button>

            </Form>
      )
}