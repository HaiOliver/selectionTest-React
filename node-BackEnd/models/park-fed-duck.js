const sql = require("../db.js");

// constructor
const ParkFedDuck = function(parkFedDuck) {
  this.location = parkFedDuck.location;
  this.number_of_duck = parkFedDuck.number_of_duck;
  this.number_of_food = parkFedDuck.number_of_food;
  this.food = parkFedDuck.food;
  this.time_fed = parkFedDuck.time_fed
};


// create new Park
ParkFedDuck.create = (newPark, result) => {
  console.log("🚀 ~ file: park-fed-duck.js ~ line 15 ~ newPark", newPark)

  sql.query("INSERT INTO duckInfo SET ?", newPark, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Line 23, created new Park in Db: ", { id: res.insertId, ...newPark});
    result(null, { id: res.insertId, ...newPark });
  });
};


// get all Parks
ParkFedDuck.getAll = result => {
  sql.query("SELECT * FROM duckInfo", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("BurnabyRestaurants: ", res);
    result(null, res);
  });
};


// update Park by ID
ParkFedDuck.updateById = (id, park, result) => {

  sql.query(
    "UPDATE duckInfo SET location = ?, number_of_duck = ?, number_of_food = ?, food = ?, time_fed = ? WHERE id = ?",
    [park.location, park.number_of_duck, park.number_of_food,
    park.food,park.time_fed, id],
    (err, res) => {
      if (err) {
            console.log("🚀 ~ file: park-fed-duck.js ~ line 53 ~ err", err)

        result(null, err);
        return;
      }
      if (res.affectedRows === 0) {
        // not found Park with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated BurnabyRestaurant: ", { id: id, ...park });
      result(null, { id: id, ...park });
    }
  );
};

// delete Park
ParkFedDuck.remove = (id, result) => {
  sql.query("DELETE FROM duckInfo WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows === 0) {
      // not found Park with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted park with id: ", id);
    result(null, res);
  });
};



module.exports = ParkFedDuck;