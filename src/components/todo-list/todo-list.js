import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDelete, onImportant, onDone }) => {

  const content = todos.map((item) => {
    return (
      <li key={item.id} className="list-group-item">
        <TodoListItem
          {...item}
          onDelete={onDelete}
          onImportant={onImportant}
          onDone={onDone}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { content }
    </ul>
  );
};

export default TodoList;
