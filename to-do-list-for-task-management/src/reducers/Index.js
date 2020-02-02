import { combineReducers } from 'redux';
import tasks from './Tasks';
import isDisplayForm from './IsDisplayForm';
import itemEditing from './ItemEditing';
import filterTable from './FilterTable';

const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    itemEditing,
    filterTable
});

export default myReducer;