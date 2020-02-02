import { combineReducers } from 'redux';
import tasks from './Tasks';
import isDisplayForm from './IsDisplayForm';
import itemEditing from './ItemEditing';
import filterTable from './FilterTable';
import search from './Search';
import sort from './Sort';

const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    itemEditing,
    filterTable,
    search,
    sort
});

export default myReducer;