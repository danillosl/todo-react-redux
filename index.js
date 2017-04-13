import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './src/components/todo/TodoContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './src/store'

ReactDOM.render(

    <Provider store={store}>
        <Router>
            <div>

            <Route path="/" component={TodoContainer} />

            </div>
        </Router>
    </Provider>,

    document.getElementById('root'));