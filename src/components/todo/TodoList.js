import React from 'react';

export default class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.getInitialState();

    }

    handleNameChange = (evt) => {
        this.setState({ ...this.state, name: evt.target.value });
    }

    handleContentChange = (evt) => {
        this.setState({ ...this.state, content: evt.target.value });

    }

    handleSubmit = () => {

        this.props.handleSubmit(this.state);

        this.setState(this.getInitialState());
    }

    getInitialState = () => {
        return { name: '', content: '' };
    }


    render() {

        let listTodos = this.props.todos.map((todo) => {
            return (<tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.content}</td>
                <td>
                    <button type="button" id="add-button" className="btn btn-default"
                        onClick={() => this.props.handleRemove(todo)} > Remove </button>
                </td>


            </tr>)
        });

        return (

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>name</th>
                        <th>content</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody id="table">

                    {listTodos}

                    <tr>

                        <td></td>
                        <td>
                            <input type="text" name="name" value={this.state.name} className="form-control" onChange={this.handleNameChange} />
                        </td>
                        <td>
                            <input type="text" name="content" value={this.state.content} className="form-control" onChange={this.handleContentChange} />

                        </td>
                        <td>
                            <button type="submit" id="add-button" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
                        </td>


                    </tr>
                </tbody>
            </table>

        );
    }
}