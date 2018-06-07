import React from 'react';
import { Todo } from './Todo';

export const TodoList = ({ todoItems }) => (
  <div
    style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}
  >
    {todoItems.map((todo, index) => <Todo key={index} title={todo} />)}
  </div>
);
