import React, { Component } from 'react';
import Axios from 'axios';

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }
    componentDidMount() {
        Axios.get('http://localhost:3000/todos')
        .then(res => {
            const tasks = res.data;
            this.setState({tasks})
        })
    }
    render() {
        return (
            <ul>
                {this.state.tasks.map(task => <li>{task.title}</li>)}
            </ul>
        )
    }
}

module.exports = Todos