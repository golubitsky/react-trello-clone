import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';

const TodoItem = ({ id, todo }) => (
  <div>
    {id} {todo.text} {todo.done}
  </div>
);

class Todos extends Component {
  static propTypes = {
    todos: PropTypes.object,
    auth: PropTypes.object,
    firebase: PropTypes.object
  }

  handleAdd = () => {
    const { newTodo } = this.refs;
    return this.props.firebase
      .push('/todos', { text: newTodo.value, done: false })
      .then(() => {
        newTodo.value = '';
        console.log('Todo Created!');
      });
  }

  render() {
    const { todos } = this.props;
    console.log(`is loaded${isLoaded(todos)}`);
    console.log(`is empty${isEmpty(todos)}`);

    // Build Todos list if todos exist and are loaded
    const loading = !isLoaded(todos);
    const empty = !loading && isEmpty(todos);

    let todosList;
    if (loading) {
      todosList = 'loading';
    } else if (empty) {
      todosList = 'Todo list is empty';
    } else {
      todosList = Object.keys(todos).map(
        (key, id) => (
          <TodoItem key={key} id={id} todo={todos[key]} />
        ));
    }

    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {todosList}
        </ul>
        <input type="text" ref="newTodo" />
        <button onClick={this.handleAdd}>
          Add
        </button>
      </div>
    );
  }
}

export default compose(
  firebaseConnect([
    '/todos' // { path: '/todos' } // object notation
  ]),
  connect(
    ({ firebase: { data: { todos } } }) => ({ // state.firebase.data.todos
      todos // Connect props.todos to state.firebase.data.todos
    })
  )
)(Todos);
