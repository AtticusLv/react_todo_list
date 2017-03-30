import React, { Component } from 'react';

class ListForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    
    let author = this.refs.author.value.trim();
    let text = this.refs.text.value.trim();
    
    if(!author && !text){
      alert('Please confirm input box non-blank');
      return
    }
    //pass value to ListBox
    this.props.onTodoSubmit({
      author:author,
      text:text
    })

    //clear input
    this.refs.author.value = '';
    this.refs.text.value = '';
  }
render() {
    return(
      <form className="ListForm" onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <input type="text" placeholder="Name" ref="author" required/>
        </div>
        <div>
          <input type="text" placeholder="What to do..." ref="text" required/>
        </div>
          <input type="submit" value="Post" className="submit-btn"/>
      </form>
    )
  }
}

export default ListForm;
