import React, { Component } from 'react';

import './App.css';



class TodosListItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      isEditing: false
    }
  }

  renderTaskSection(){
    const { task, isCompleted} = this.props;

    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    };

    if(this.state.isEditing){
      return(
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type='text' defaultValue={task} ref='editInput' />
          </form>
        </td>
      );
    }

    return(
      <td style={taskStyle}
          onClick={this.props.toggleTask.bind(this, task)}
        >
        {task}
      </td>
    );

  }
  renderActionSection() {
    if(this.state.isEditing){
      return(
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancleClick.bind(this)}>Cancle</button>
        </td>
      );
    }

    return(
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button onClick={this.onDeleateClick.bind(this)}>Deleate</button>
      </td>
    );
  }
  render() {
    return (

      <tr>

          {this.renderTaskSection()}
          {this.renderActionSection()}

      </tr>

    );
  }

  onEditClick() {
    this.setState({isEditing: true});
  }

  onCancleClick(){
    this.setState({isEditing: false});
  }
  onDeleateClick(){
    this.props.deleateTask(this.props.task);

  }
  onSaveClick(event){
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value
    this.props.saveTask(oldTask, newTask);

    this.setState({isEditing: false});
  }
}

export default TodosListItem;
