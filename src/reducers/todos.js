import {
  addTodoType,
  deleteTodoType,
  editTodoType,
  completeTodoType
} from '../actions/types';

import updateItemInArray from '../helpers';

const todos = (state = [], action) => {
  switch (action.type) {
    case addTodoType:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          complete: false
        }
      ];
    case deleteTodoType:
      return state.filter(({ id }) => id !== action.id);
    case editTodoType: {
      const item = {
        id: action.id,
        text: action.text,
        complete: action.complete
      };
      const newState = updateItemInArray(item, state);
      return [...newState];
    }
    case completeTodoType: {
      const item = {
        id: action.id,
        text: action.text,
        complete: !action.complete
      };
      const newState = updateItemInArray(item, state);
      return [...newState];
    }
    default:
      return state;
  }
};
export default todos;
