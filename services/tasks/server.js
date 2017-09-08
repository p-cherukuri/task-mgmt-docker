// server.js

// Unsuccessful at connecting this data store to the user interface...
// Couldn't resolve CORS issues for testing API by calling it from a different localhost port
// Could have resolved it by testing it hosted on a server, like Heroku?
// Testing API with Postman was successful - all routes were working properly
// Successful at running it on Docker

'use strict';

const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

// Get API Routes
const api = require('./api/routes/task_routes');

// Constants - Port and Host values
const PORT = process.env.PORT || 8000;
// const HOST = '0.0.0.0';

// Instance of Express app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//Static files served in 'ui/dist' directory
app.use(express.static(path.join(__dirname, '/ui/dist')));

// Set API Routes
app.use('/api', api);

// Serving 'index.html'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/ui/dist/index.html'));
});

app.set('port', PORT);

//Create HTTP server
const server = http.Server(app);

// Initializing MongoDB with credentials for API use
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('./api/routes')(app, database);
  // Start server listening on specified port number
  server.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));  
});

