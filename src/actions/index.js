import {
  addTodoType,
  deleteTodoType,
  editTodoType,
  completeTodoType
} from './types';

let nextTodoId = 0;

export const addTodo = text => ({
  type: addTodoType,
  id: nextTodoId++,
  text
});

export const deleteTodo = id => ({
  type: deleteTodoType,
  id
});

export const editTodo = (id, text, complete) => ({
  type: editTodoType,
  id,
  text,
  complete
});

export const completeTodo = (id, text, complete) => ({
  type: completeTodoType,
  id,
  text,
  complete
});
