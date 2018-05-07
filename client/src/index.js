import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './components/todos/Todos';
import Time from './components/time/Time'

ReactDOM.render(<Time />, document.getElementById('time'))
ReactDOM.render(<Todos />, document.getElementById('app'))