//start an instance of Router
const router = require('express').Router();


const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals');



 
//route that the front-end can request data from - CREATES THE ROUTE
router.get('/animals', (req, res) => {
    let results = animals;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });



//Handles requests for a specific animal
router.get('/animals/:id', (req, res) => {
  const result = findById(req.params.id, animals);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

//Handles requests to add animals
router.post('/animals', (req, res) => {
  // req.body is where our incoming content will be
    // set id based on what the next index of the array will be
  req.body.id = animals.length.toString();

      // add and validate animal to json file and animals array in this function
      if (!validateAnimal(req.body)) {
        res.status(400).send('The animal is not properly formatted.');
      } else {
        const animal = createNewAnimal(req.body, animals);
        res.json(animal);
      }


  // console.log(req.body);
  // res.json(animal);
});

module.exports  = router;