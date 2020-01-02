import React, { Component } from 'react'

export class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({ title: '' })
    }

    render() {
        return (
            <p style={{display: 'flex'}}>
                <input type="text" name="title" value={this.state.title} placeholder="Create new Todo" onChange={ this.handleChange } style={{flex: '10', padding: '5px'}} />
                <button onClick={ this.submit } style={{flex: '1'}} >Add Todo</button>
            </p>
        )
    }
}

export default NewTodo
