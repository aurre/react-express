'use strict'

const data = require('./data')
const express = require('express')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')

const app = express();

const PORT = 3000;

app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res, next) {
    res.send(`{"message": "Hello World"}`)
})

app.get('/todos', function (req, res, next) {
    res.send(data)
})

app.get('/todos/:id', function (req, res, next) {
    const id = req.params.id

    res.send(data[id])
})

app.post('/todos', function (req, res, next) {
    const todo = req.body
    data.push(todo)
    res.send(todo)
})

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}!`)
})