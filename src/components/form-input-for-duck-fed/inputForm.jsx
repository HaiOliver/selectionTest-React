import React,{useState} from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DateTimePicker from 'react-datetime-picker';
import { useHistory } from "react-router-dom";
import './inputForm.css';
export default function FormInput() {

      const [time_fed, onChangeTime] = useState(new Date());
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

            setNumberFoods(value)
      }

      const formatDate = (time) => {
            let date_ob = time;

            // adjust 0 before single digit date
            let date = ("0" + date_ob.getDate()).slice(-2);

            // current month
            let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

            // current year
            let year = date_ob.getFullYear();

            // current hours
            let hours = date_ob.getHours();

            // current minutes
            let minutes = date_ob.getMinutes();

            // current seconds
            let seconds = date_ob.getSeconds();

            return (year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds)

      }
      const history = useHistory();
      // ! Handle Submit
      const handleSubmit = (e) => {
            e.preventDefault()
            // ! Check validation empty blank
            if(location === "" || foods === "" || numberDucks === "" || numberFoods === ""  ){
                  alert("There is empty field. Please enter data !!")
                  return
            }

            const data = {

                  location,
                  number_of_duck: numberDucks,
                  number_of_food : numberFoods,
                  time_fed: formatDate(time_fed),
                  food:foods
                    };

            // ? do post request here
            axios.post("/addNewPark",data)
                  .then((response) => {
                              console.log("🚀 ~ file: inputForm.jsx ~ line 57 ~ .then ~ response", response)
                              alert("Park successfully added!");
                                    })
                  .catch((error) => {
                              console.log("🚀 ~ file: inputForm.jsx ~ line 61 ~ handleSubmit ~ error", error)
                              alert('Sorry, park cannot be added. Network error.');
                                    })


            // ! redirect to Homepage
            let path = `/`;
            history.push(path);
      }



      return (
            <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicLocation">
                        <Form.Label className="text-left" style={{width: "100%"}}>
                              <h3 className="where">
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
                              <h3 className="time_fed">
                                    What time the duck are fed ?
                              </h3>


                        </Form.Label>

                        <div className="text-left" >
                              <DateTimePicker
                              onChange={onChangeTime}
                              value={time_fed}

                              />
                        </div>


                  </Form.Group>

                  <Form.Group controlId="formBasicDucks">
                        <Form.Label className="text-left" style={{width: "100%"}}>
                              <h3 className="numberDucksFed">
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
                              <h3 className="foodFedDuck">
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
                              <h3 className="howManyfood">
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
                        Add new location
                  </Button>

            </Form>
      )
}