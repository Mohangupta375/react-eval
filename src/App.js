import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';

const todoItems = ['Todo1', 'Todo2', 'Todo3'];

class App extends Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <div>
          <input type="text" placeholder="Todo Item" />
          <button type="button">Add</button>
        </div>
        <TodoList todoItems={todoItems} />
      </div>
    );
  }
}

export default App;
