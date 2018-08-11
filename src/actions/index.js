import { addTodoType, deleteTodoType, editTodoType } from './types';

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

export const editTodo = (id, text) => ({
  type: editTodoType,
  id,
  text
});
