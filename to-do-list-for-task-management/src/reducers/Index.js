import { combineReducers } from 'redux';
import tasks from './Tasks';
import isDisplayForm from './IsDisplayForm';
import itemEditing from './ItemEditing';
import filterTable from './FilterTable';
import search from './Search';

const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    itemEditing,
    filterTable,
    search
});

export default myReducer;