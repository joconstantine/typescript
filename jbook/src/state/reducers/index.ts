import { combineReducers } from 'redux';
import cellsRecducer from './cellsReducer';

const reducers = combineReducers({
    cells: cellsRecducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;