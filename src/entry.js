import React, { Component } from 'react';
import { render } from 'react-dom';
import ListForm from './components/ListForm';
import Todo from './components/Todo';
import './styles/main.css';

class ListBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { author: "Atticus", text: "What is this"}
      ]
    }
  }
  
  handleTodoSubmit(todo) {
    let data = Object.assign([], this.state.data);
    data.push(todo);
    this.setState({ data: data });
  }
  
  handleDeleteTodo(e) {
    const _index = e.target.parentNode.getAttribute('data-index');
    let data = Object.assign([],this.state.data);
    data.splice(_index, 1);
    this.setState({ data: data});
  }
  
  render() {
    return(
      <div className="ListBox">
        <h1>React-todoList</h1>
        <ListForm  onTodoSubmit={this.handleTodoSubmit.bind(this)}/>
        <List data={this.state.data} onDeleteTodo={this.handleDeleteTodo.bind(this)}/>
      </div>
    )
  }
}


class List extends Component {
  render() {
    let _this = this;
    let todoNodes = this.props.data.map(function(item, index){
      return(
        <Todo author={ item.author } text={ item.text }key={index} index={index} onDeleteTodo={_this.props.onDeleteTodo}>
          {item.text}
        </Todo>
      )
    })
    return(
      <div className="List">
        {todoNodes}
      </div>
    )
  }
}

render(
  <ListBox />,document.getElementById('container')
)