import React, { Component } from 'react'
import Todos from './components/Todos'
import NewTodo from './components/NewTodo'
import './App.css'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Make dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting',
        completed: false
      }
    ]
  }

  // cross out todo
  markComplete = (id) => {
    this.setState(
      { 
        todos: this.state.todos.map(todo => {
          if(todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo;
        })
      });
  }

  // delete todo
  deleteItem = (id) => {
    this.setState(
      {
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }
    )
  }

  // adds new todo
  addTodo = (title) => {
    let newTodo = {
      id: this.state.todos.length+1,
      title: title,
      completed: false
    }
    this.setState(
      {
        todos: [...this.state.todos.concat(newTodo)]
      }
    )
    console.log(title)
  }

  render() {
    return (
      <div className="App">
        <NewTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
