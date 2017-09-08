'use strict';

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

// Constants - Port and Host values
const PORT = 8080;
const HOST = '0.0.0.0';

// Instance of Express app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Initializing MongoDB with credentials for API use
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('./api/routes')(app, database);

  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
})

//require('./app/routes')(app, {});
//app.get('/', (req, res) => {
//  res.send('Heoll world\n');
//});

