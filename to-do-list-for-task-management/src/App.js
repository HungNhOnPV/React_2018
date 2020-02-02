import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import * as actions from './actions/Index';

class App extends React.Component {
    state = {
        keyword: '',
        sortBy: 'name',
        sortValue: 1
    };

    onToggleForm = () => {
        const { itemEditing } = this.props;

        if(itemEditing && itemEditing.id !== '') {
            this.props.onOpenForm();
        } else {
            this.props.onToggleForm();
        }
        this.props.onClearTask({
            id: '',
            name: '',
            status: false
        });
    }

    onSearch = keyword => {
        this.setState({
            keyword: keyword
        });
    }

    onSort = (sortBy,sortValue) => {
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        });
    }

  render() {
        const { 
            // keyword, 
            sortBy, 
            sortValue 
        } = this.state;

        const { 
            isDisplayForm, 
        } = this.props;

    // if(keyword) {
    //     tasks = tasks.filter((task) => {
    //         return task.name.toLowerCase().indexOf(keyword) !== -1;
    //     });
    // }

    // if(sortBy === 'name') {
    //     tasks.sort((a, b) => {
    //         if(a.name > b.name) return sortValue;
    //         else if(a.name < b.name) return -sortValue;
    //         else return 0;
    //     });
    // } else {
    //     tasks.sort((a, b) => {
    //         if(a.status > b.status) return -sortValue;
    //         else if(a.status < b.status) return sortValue;
    //         else return 0;
    //     });
    // }

    return(
      
      <div className="container">
        <div className="text-center">
            <h1>Quản lý công việc</h1><hr/>
        </div>
        <div className="row">
          <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {/* Form */}
            <TaskForm />
          </div>
          <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button 
                type="button" 
                className="btn btn-primary" 
                onClick={ this.onToggleForm }
            >
                <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>&nbsp;
            
            <Control 
                onSearch={ this.onSearch } 
                onSort={ this.onSort }
                sortBy={ sortBy}
                sortValue={ sortValue }
            /> 

            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <TaskList />
                </div>
            </div>
          </div>
        </div>
      </div>  
        
    );
  }
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toggleForm());
        },
        onClearTask: task => {
            dispatch(actions.editItem(task));
        },
        onOpenForm: () => {
            dispatch(actions.openForm());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
