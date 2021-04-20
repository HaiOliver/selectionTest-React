import React,{useState} from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function FormInput() {


      const [ location, setLocation] = useState("")
      const [ time, setTime] = useState("")
      const [ numberDucks, setNumberDucks] = useState("")
      const [ numberFoods, setNumberFoods] = useState("")
      const [ foods, setFoods] = useState("")


      // ! Set field
      const handleLocation = (value) => {
            setLocation(value)
      }

      const handleTime = (value) => {
            setTime(value)
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

      return (
            <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicLocation">
                        <Form.Label>Location Park</Form.Label>
                        <Form.Control
                              type="text"
                              placeholder="Type here ..."
                              onChange={ e => handleLocation(e.target.value)}
                               />
                  </Form.Group>

                  <Form.Group controlId="formBasicTime">
                        <Form.Label>What time the duck are fed ?</Form.Label>
                        <Form.Control
                              type="text"
                              placeholder="Type here ..."
                              onChange={ e => handleTime(e.target.value)}
                               />
                  </Form.Group>

                  <Form.Group controlId="formBasicDucks">
                        <Form.Label>How many ducks are fed ?</Form.Label>
                        <Form.Control
                              type="text"
                              placeholder="Type here ..."
                              onChange={ e =>  handleNumberDucks(e.target.value)}
                              />
                  </Form.Group>

                  <Form.Group controlId="formBasicFoods">
                        <Form.Label>What food the duck are fed ?</Form.Label>
                        <Form.Control
                              type="text"
                              placeholder="Type here ..."
                              onChange={ e => handleFoods(e.target.value)}
                              />
                  </Form.Group>

                  <Form.Group controlId="formBasicNumberFoods">
                        <Form.Label>How many food the duck are fed ?</Form.Label>
                        <Form.Control
                              type="text"
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