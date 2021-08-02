//pull express into the file
const express = require('express');

//instantiates the server --- 
//assigning express() to the app variable so that we can later chain on methods to the Express.js server.

const PORT = process.env.PORT || 3001;
const app = express();


// Includes the routes in this file
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// Instruct the server to make the public file available with all files within it.  The way it works is that we provide a file path to a location in our application (in this case, the public folder) and instruct the server to make these files static resources
app.use(express.static('public'));

//telling the server that any time a client navigates to <ourhost>/api, the app will use the router we set up in apiRoutes. If / is the endpoint, then the router will serve back our HTML routes.
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// method to make our server listen -- stays at bottom
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});


// //Creates a new copy of the file for data storage
// const fs = require('fs');
// const path = require('path');


// //route that the front-end can request data from - REQUIRES THE DATA
// const { animals } =  require("./data/animals");
