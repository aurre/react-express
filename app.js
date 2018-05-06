'use strict'

const express = require('express')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const todos = require('./routes/todos')
const db = require('./db').db

const app = express();

const PORT = 3000;

app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/todos', todos)

// app.get('/', function (req, res, next) {
//     res.send(`{"message": "Hello World"}`)
// })

// actually start the server
var server = app.listen(3000, function() {
    // this is an async callback, so the server.address().port is available
    // and set synchronously by the time we get into this callback function - fancy!
    console.log('Server operating and listening on port', server.address().port, '...');
    // change to force: true whenever you make a change to the db definition
    db.sync({force: false})
      .then(message => {
        console.log('...and db is synced!');
      })
      .catch(function(err) {
        throw err;
      });
  });
