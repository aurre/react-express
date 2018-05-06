
const router = require('express').Router();
const Todo = require('../db').Todo

router.get('/', async (req, res, next) => {
    const todos = await Todo.findAll()
    res.send(todos)
})

router.get('/:id', function(req, res, next) {
    Todo.findById(req.params.id)
    .then(function(task) {
        if (!task) {
            res.send(`{"message": "task not found!"}`)
        } else {
            console.log(task.taskCompleted ? 'task completed' : 'task is not completed')
            res.send(task)
        }
    })
    .catch(next);
})

router.post('/', function (req, res, next) {
    const todo = req.body
    Todo.create(todo).then(function(task) {
        res.send(task)
    })
})

module.exports = router
