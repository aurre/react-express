import React, { Component } from 'react';
import Axios from 'axios';
import css from './todos.css';

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            task: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        this.setState({task: event.target.value});
    }

    handleSubmit (event){
        alert('A task was summited ' + this.state.task)
        event.preventDefault();

        const title = this.state.task
        

        Axios.post('http://localhost:3000/todos', { title })
        .then(res => {
            const task = res.data;
            this.state.tasks.push(task)
            this.setState({task})
            console.log(res);
            console.log(res.data.title);
        })
        
    }
    componentDidMount() {
        Axios.get('http://localhost:3000/todos')
        .then(res => {
            const tasks = res.data;
            console.log(tasks)
            this.setState({tasks})
        })
    }
    
    render() {
        return (
            <div className="form-group">
            <h1>To-Do <small>List</small></h1>
          <form onSubmit={this.handleSubmit}>
              <input type="text" className="form-control" placeholder="Your Task" name="task" value={this.state.task} onChange={this.handleChange} ></input>
              <button type="submit" value="Submit" className="btn btn btn-primary">Add</button>
          </form>
            
            <ul className='list-unstyled' id='todo'>
                {this.state.tasks.map(task => <li key={task.id}>{task.title}</li>)}
            </ul>
            </div>
            
        )
    }
}

module.exports = Todos