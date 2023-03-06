const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;

//TODO

app.get("/musicians", async(request, response) =>{
    try {
        const musicians = await Musician.findAll(); // Retrieve all restaurants from the database
        response.json(musicians); // Send the restaurants as a JSON response
      } catch (error) {
        console.error(error);
        response.status(500).send('Internal Server Error');
      }
})

app.get('/musicians/:id', async(req, res) => {
  keyForRes = req.params.id
  objFound = await Musician.findByPk(keyForRes)
  res.json(objFound)

})

app.listen(port, () => {
    sequelize.sync();
    console.log(`Your server is listening on port http://localhost:${port}/musicians`);
})