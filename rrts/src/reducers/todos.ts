import { Todo } from '../actions';
import { Action, ActionTypes } from '../actions/types';

export const todoReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((state: Todo): boolean => {
        return state.id !== action.payload;
      });
    default:
      return state;
  }
};
