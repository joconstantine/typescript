import { Dispatch, Middleware } from 'redux';
import { Action } from '../actions';
import { ActionType } from '../action-types';
import { saveCells } from '../action-creator';
import { RootState } from '../reducers';

export const persistMiddleware: Middleware<{}, RootState, Dispatch<Action>> = ({
  dispatch,
  getState,
}) => {
  let timer: any;

  return (next: Dispatch<Action>) => {
    return (action: Action) => {
      next(action);

      if (
        [
          ActionType.MOVE_CELL,
          ActionType.UPDATE_CELL,
          ActionType.INSERT_CELL_AFTER,
          ActionType.DELETE_CELL,
        ].includes(action.type)
      ) {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          saveCells()(dispatch, getState);
        }, 250);
      }
    };
  };
};
