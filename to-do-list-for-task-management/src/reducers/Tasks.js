import * as types from '../constants/ActionTypes';

let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

let generateId = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() 
            + '-' + s4() + s4() + s4();
}

let data = JSON.parse(localStorage.getItem('tasks'));
let initialState = data ? data : [];

let myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LIST_ALL: {
            return state;
        }
        case types.ADD_TASK: {
            let newTask = {
                id : generateId(),
                name: action.task.name,
                status: action.task.status === 'true' ? true : false
            }
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        }
        default: {
            return state;
        }
    }
}

export default myReducer;