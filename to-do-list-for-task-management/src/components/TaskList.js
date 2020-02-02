import React, { Component } from 'react';
import TaskItem from './TaskItem';

import { connect } from 'react-redux';
import { filter } from 'lodash';
import * as actions from '../actions/Index';

class TaskList extends Component {
    state = {
        filterName: '',
        filterStatus: -1
    }

    onChange = event => {
        const target = event.target;
        let name = target.name;
        const value = target.value;

        let filter = {
            name: name === 'filterName' ? value : this.state.filterName,
            status: name === 'filterStatus' ? value : this.state.filterStatus
        };

        this.props.onFilterTable(
            filter
        );
        this.setState({
            [name]: value
        });
    }

    render() {
        let { tasks, filterTable, keyword, sort } = this.props;
        const { filterName, filterStatus } = this.state;

        // filter to table
        if(filterTable.name) {
            tasks = filter(tasks, (task) => {
                return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1;
            });
        }

        // search to table
        if(keyword) {
            tasks = filter(tasks, (task) => {
                return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
            });
        }

        // sort to table 
        if(sort.by === 'name') {
            tasks.sort((a, b) => {
                if(a.name > b.name) return sort.value;
                else if(a.name < b.name) return -sort.value;
                else return 0;
            });
        } else {
            tasks.sort((a, b) => {
                if(a.status > b.status) return -sort.value;
                else if(a.status < b.status) return sort.value;
                else return 0;
            });
        }

        tasks = filter(tasks, (task) => {
            if(filterTable.status === -1) {
                return task;
            } else return task.status === (filterTable.status === 1 ? true : false);
        });

        const elmTask = tasks.map((task, index) => {
            return <TaskItem 
                        key={ task.id } 
                        index={ index } 
                        task={ task } 
                    />
        })

        return(
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input 
                                type="text"
                                className="form-control"
                                name="filterName"
                                value={ filterName }
                                onChange={ this.onChange }
                            />
                        </td>
                        <td>
                            <select
                                className="form-control"
                                name="filterStatus"
                                value= { filterStatus }
                                onChange={ this.onChange }
                            >
                                <option value={-1}>Tất cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    { elmTask }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        filterTable: state.filterTable,
        keyword: state.search,
        sort: state.sort
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTable: filter => {
            dispatch(actions.filterTable(filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);