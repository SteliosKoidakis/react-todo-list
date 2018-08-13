import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  RECEIVE_TODOS
} from '../actions/types';

import updateItemInArray from '../helpers';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          complete: action.complete
        }
      ];
    case DELETE_TODO:
      return state.filter(({ id }) => id !== action.id);
    case EDIT_TODO: {
      const item = {
        id: action.id,
        text: action.text,
        complete: action.complete
      };
      const newState = updateItemInArray(item, state);
      return [...newState];
    }
    case RECEIVE_TODOS: {
      return action.todos;
    }
    default:
      return state;
  }
};
export default todos;
