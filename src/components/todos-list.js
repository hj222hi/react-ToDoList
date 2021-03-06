import React, { Component } from 'react';

import './App.css';
import TodosListHeader from './todos-header'
import TodosListItem from './todos-list-item'
import _ from 'lodash';


class TodosList extends Component {
  renderItems(){
    const props = _.omit(this.props, 'todos');
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index}
      {...todo}
      {...props}/>);
  }


  render() {
  return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}

export default TodosList;
