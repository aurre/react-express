const Sequelize = require('sequelize');

// when you go to start the server, be smarter than me and make sure you have postgres actually running on your machine!
const

db = new Sequelize('postgres://localhost:5432/todos', {
  logging: false
});

const Todo = db.define('todo', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    description: {
        type: Sequelize.TEXT,
    },
    completed: {
        type: Sequelize.BOOLEAN,
    }
})

module.exports = {
    db,
    Todo,
}