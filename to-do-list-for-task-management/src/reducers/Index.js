import { combineReducers } from 'redux';
import tasks from './Tasks';
import isDisplayForm from './IsDisplayForm';
import itemEditing from './ItemEditing';

const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    itemEditing    
});

export default myReducer;