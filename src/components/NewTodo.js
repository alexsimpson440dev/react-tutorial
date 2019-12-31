import React, { Component } from 'react'

export class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    }

    render() {
        return (
            <div>
                <p>
                    { "Todo Name: " }
                    <input type="text" value={this.state.inputValue} placeholder="Create new Todo" onChange={ (e) => this.handleChange(e) } />
                    <button onClick={ () => this.props.addTodo(this.state.inputValue)}>Add Todo</button>
                </p>
            </div>
        )
    }
}

export default NewTodo
