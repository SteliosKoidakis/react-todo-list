import reducer from './todos';

import { addTodoType, deleteTodoType, editTodoType } from '../actions/types';

describe('todo reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('add a new todo', () => {
    const action = {
      id: 1,
      type: addTodoType,
      text: 'test'
    };
    expect(reducer(undefined, action)).toEqual([
      {
        id: 1,
        text: 'test'
      }
    ]);
  });
  it('delete a todo', () => {
    const state = [{ id: 1, text: 'test' }, { id: 2, text: 'test' }];
    const action = {
      id: 1,
      type: deleteTodoType
    };
    expect(reducer(state, action)).toEqual([{ id: 2, text: 'test' }]);
  });

  it('edit a todo', () => {
    const state = [{ id: 1, text: 'test' }, { id: 2, text: 'test' }];
    const action = {
      id: 1,
      text: 'new text',
      type: editTodoType
    };
    expect(reducer(state, action)).toEqual([
      { id: 1, text: 'new text' },
      { id: 2, text: 'test' }
    ]);
  });
});
