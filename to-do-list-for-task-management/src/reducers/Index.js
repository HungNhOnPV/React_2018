import { combineReducers } from 'redux';
import tasks from './Tasks';
import isDisplayForm from './IsDisplayForm';

const myReducer = combineReducers({
    tasks,
    isDisplayForm
});

export default myReducer;