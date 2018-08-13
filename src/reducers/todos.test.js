import reducer from './todos';

import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../actions/types';

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
      type: ADD_TODO,
      text: 'test',
      complete: false
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
      type: DELETE_TODO
    };
    expect(reducer(state, action)).toEqual([
      { id: 2, text: 'test', complete: true }
    ]);
  });

  it('Edit a todo', () => {
    const action = {
      id: 1,
      text: 'new text',
      type: EDIT_TODO,
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
      type: EDIT_TODO,
      complete: true
    };
    expect(reducer(state, action)).toEqual([
      { id: 1, text: 'test', complete: true },
      { id: 2, text: 'test', complete: true }
    ]);
  });
});
