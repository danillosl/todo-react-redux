import React from 'react';
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

import * as todoAction from '../../actions/todoAction'
import TodoList from './TodoList'


@connect(
    (store) => {
        return { todo: store.todo }
    }
)
export default class TodoContainer extends React.Component {

    componentWillMount() {



    }

    handleSubmit = (todo) => {

        this.props.dispatch(todoAction.addTodo(todo));

    }

    handleRemove = (todo) => {

        this.props.dispatch(todoAction.deleteTodo(todo));

    }

    render() {

        return (

            <div className="container">


                <div className="well well-sm" style={{ margin: "3rem" }}>
                    <h1 className="text-center">React Flux Todo App</h1>
                </div>

                <TodoList handleRemove={this.handleRemove} handleSubmit={this.handleSubmit} todos={this.props.todo.todos}></TodoList>

            </div>

        );
    }
}