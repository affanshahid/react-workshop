import React from 'react';

// Contract
// This component will call the prop `onAddTodo` 
// when a valid todo is added

export default class AddTodoBox extends React.Component {
  state = {
    text: '',
    error: false
  };

  inputChange = (ev) => this.setState({
    text: ev.target.value,
    error: false
  });

  handleClick = () => {
    if (this.state.text != '') {
      this.props.onAddTodo(this.state.text);
    } else {
      this.setState({
        error: true
      });
    }
  }

  render() {
    return (
      <>
        {
          this.state.error && <span>Empty Input</span>
        }
        <br />
        <input
          value={this.state.text}
          onChange={this.inputChange}
        />
        <button
          onClick={this.handleClick}
        >
          Add
      </button>
      </>
    )
  }
}