const express = require("express");
const bodyParser = require("body-parser");
const ParkFedDuck = require("./models/park-fed-duck");

const cors=require('cors');
const app = express();
// parse requests of content-type: application/json
app.use(bodyParser.json());
app.use(cors());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



// get all Parks
app.get("/allParks", (req, res) => {
  ParkFedDuck.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Park"
      });
    else res.send(data);
  });
});


// post request create new park
app.post("/addNewPark",(req,res)=>{
  


  // Validate request
  if (!req.body) {
       res.status(400).send({
         message: "Content can not be empty!"
       });
     }


     // Create a Customer
     const newPark = new ParkFedDuck({
       location: req.body.location,
       number_of_duck: req.body.number_of_duck,
       number_of_food: req.body.number_of_food,
       food:req.body.food,
       time_fed:req.body.time_fed
     });

     // Save Park in the database
     ParkFedDuck.create(newPark, (err, data) => {
       if (err)
         res.status(500).send({
           message:
             err.message || "line 23, controller.js, Some error occurred while creating the Park"
         });
       else res.send(data);
     });

} )



// update on a park by ID
app.put("/park/:id",(req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  ParkFedDuck.updateById(
    req.params.id,
    new ParkFedDuck({...req.body}),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
})


// delete Park by ID
app.delete("/park/:id",(req, res) => {
  console.log("🚀 ~ file: server.js ~ line 97 ~ app.delete ~ req", req)

  ParkFedDuck.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Van Restaurant with id ${req.params.id}.`,
          success:false
        });
      } else {
        res.status(500).send({
          message: "Could not delete Van Restaurant with id " + req.params.id
        });
      }
    } else res.send({ message: `Park was deleted successfully!` , success: true });
  });
})




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});