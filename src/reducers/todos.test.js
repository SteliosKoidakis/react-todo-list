import reducer from './todos';

import {
  addTodoType,
  deleteTodoType,
  editTodoType,
  completeTodoType
} from '../actions/types';

describe('Todo reducer', () => {
  const state = [
    { id: 1, text: 'test', complete: false },
    { id: 2, text: 'test', complete: true }
  ];
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('Add a new todo', () => {
    const action = {
      id: 1,
      type: addTodoType,
      text: 'test'
    };
    expect(reducer(undefined, action)).toEqual([
      {
        id: 1,
        text: 'test',
        complete: false
      }
    ]);
  });
  it('Delete a todo', () => {
    const action = {
      id: 1,
      type: deleteTodoType
    };
    expect(reducer(state, action)).toEqual([
      { id: 2, text: 'test', complete: true }
    ]);
  });

  it('Edit a todo', () => {
    const action = {
      id: 1,
      text: 'new text',
      type: editTodoType,
      complete: false
    };
    expect(reducer(state, action)).toEqual([
      { id: 1, text: 'new text', complete: false },
      { id: 2, text: 'test', complete: true }
    ]);
  });

  it('Change the status of a todo item', () => {
    const action = {
      id: 1,
      text: 'test',
      type: completeTodoType,
      complete: false
    };
    expect(reducer(state, action)).toEqual([
      { id: 1, text: 'test', complete: true },
      { id: 2, text: 'test', complete: true }
    ]);
  });
});
