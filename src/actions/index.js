import { ADD_TODO, DELETE_TODO, EDIT_TODO, RECEIVE_TODOS } from './types';

import http from '../helpers/http';

const addTodo = ({ id, text, complete }) => ({
  type: ADD_TODO,
  id,
  text,
  complete
});

const deleteTodo = ({ id }) => ({
  type: DELETE_TODO,
  id
});

const editTodo = ({ id, text, complete }) => ({
  type: EDIT_TODO,
  id,
  text,
  complete
});

const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const fetchTodos = () => dispatch => {
  http(null, 'GET', dispatch, receiveTodos);
};

export const updateTodo = (id, text, complete) => dispatch => {
  const requestoBody = { id, text, complete };
  return http(requestoBody, 'PUT', dispatch, editTodo);
};

export const removeTodo = id => dispatch => {
  const requestoBody = { id };
  return http(requestoBody, 'DELETE', dispatch, deleteTodo);
};

export const createTodo = text => dispatch => {
  const requestoBody = { text, complete: false };
  return http(requestoBody, 'POST', dispatch, addTodo);
};
