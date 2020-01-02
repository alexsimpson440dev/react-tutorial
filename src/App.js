import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import About from './components/pages/About'
import Todos from './components/Todos'
import NewTodo from './components/NewTodo'
import './App.css'

class App extends Component {
  state = {
    todos: []
  }

  async componentDidMount() {
    const res = await fetch('https:/jsonplaceholder.typicode.com/todos?_limit=10')
    const json = await res.json()
    this.setState({ todos: json })
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
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <NewTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
