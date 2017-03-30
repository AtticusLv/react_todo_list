import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return(
      <div className="todo" data-index={this.props.index}>
        <div className="delete" onClick={this.props.onDeleteTodo}>x</div>
        <h2>{ this.props.author }</h2>
        <p>{ this.props.text }</p>
      </div>
    )
  }
}

export default Todo;