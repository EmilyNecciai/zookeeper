const path = require('path');
const router = require('express').Router();



// Get index.html to be served from the express server
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
  
// Get Animals.html to be served from the express server
router.get('/animals', (req, res) => {
res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

//get Zookeepers.html to be served from the express server
router.get('/zookeepers', (req, res) => {
res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

//WILDCARD ROUTE
router.get('*', (req, res) => {
res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;