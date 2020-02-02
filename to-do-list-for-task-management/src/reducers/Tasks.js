import * as types from '../constants/ActionTypes';
import { findIndex } from 'lodash';

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
        case types.SAVE_TASK: {
            let task = {
                id: action.task.id,
                name: action.task.name,
                status: (action.task.status === 'true' || action.task.status === true) ? true : false
            }

            if(!task.id) {
                task.id = generateId();
                state.push(task);
            } else {
                const index = findIndex(state, (task) => {
                    return task.id === action.task.id;
                });

                if(index !== -1) {
                    state[index] = task;
                }
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        }
        case types.UPDATE_STATUS_TASK: {
            const index = findIndex(state, (task) => {
                return task.id === action.id;
            })

            if(index !== -1) {
                state[index] = {
                    ...state[index],
                    status: !state[index].status
                }
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state]
        }
        case types.DELETE_TASK: {
            const index = findIndex(state, (task) => {
                return task.id === action.id
            });

            if(index !== -1) {
                state.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state]
        }
        default: {
            return state;
        }
    }
}

export default myReducer;