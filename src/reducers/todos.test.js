import reducer from './todos';

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  RECEIVE_TODOS
} from '../actions/types';

describe('Todo reducer', () => {
  const state = [
    { id: '1', text: 'test', complete: false },
    { id: '2', text: 'test', complete: true }
  ];
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('Add a new todo in an empty state', () => {
    const action = {
      id: '1',
      type: ADD_TODO,
      text: 'test',
      complete: false
    };
    expect(reducer(undefined, action)).toEqual([
      {
        id: '1',
        text: 'test',
        complete: false
      }
    ]);
  });

  it('Add a new todo in a no empty state', () => {
    const action = {
      id: '3',
      type: ADD_TODO,
      text: 'test',
      complete: false
    };
    const finalState = [...state];
    finalState.push({
      id: '3',
      text: 'test',
      complete: false
    });
    expect(reducer(state, action)).toEqual(finalState);
  });

  it('Delete a todo', () => {
    const action = {
      id: '1',
      type: DELETE_TODO
    };
    expect(reducer(state, action)).toEqual([
      { id: '2', text: 'test', complete: true }
    ]);
  });

  it('Edit a todo', () => {
    const action = {
      id: '1',
      text: 'new text',
      type: EDIT_TODO,
      complete: false
    };
    expect(reducer(state, action)).toEqual([
      { id: '1', text: 'new text', complete: false },
      { id: '2', text: 'test', complete: true }
    ]);
  });

  it('Change the status of a todo item', () => {
    const action = {
      id: '1',
      text: 'test',
      type: EDIT_TODO,
      complete: true
    };
    expect(reducer(state, action)).toEqual([
      { id: '1', text: 'test', complete: true },
      { id: '2', text: 'test', complete: true }
    ]);
  });

  it('Fetch todos list', () => {
    const action = {
      type: RECEIVE_TODOS,
      todos: state
    };
    expect(reducer(state, action)).toEqual(state);
  });
});
