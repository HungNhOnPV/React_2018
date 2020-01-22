import React from 'react';
import './App.css';

import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends React.Component {
    state = {
        tasks: [],
        isDisplayForm: false
    };

    componentWillMount() {
        if( localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            });
        }
    }

    s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateId = () => {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() 
                + '-' + this.s4() + this.s4() + this.s4();
    }

    elmTaskForm = value => value 
        ? <TaskForm  
            isDisplayForm={ this.state.isDisplayForm } 
            onCloseForm={ this.onCloseForm } 
            onSubmit={ this.onSubmit }
        /> : '';

    onSubmit = (data) => {
        const { tasks } = this.state;
        data.id = this.generateId();
        tasks.push(data);

        this.setState({
            tasks: tasks
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));

    }

    onToggleForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        });
    }

    onCloseForm = params => {
        this.setState({
            isDisplayForm: params
        });
    }

    onUpdateStatus = id => {
        const { tasks } = this.state;
        const index = this.findIndex(id);

        if(index !== -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    onDelete = id => {
        const { tasks } = this.state;
        const index = this.findIndex(id);

        if(index !== -1) {
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        this.onCloseForm();
    }

    findIndex = id => {
        const { tasks } = this.state;
        let result = -1;
        tasks.forEach((task, index) => {
            if(task.id === id) result = index;
        });
        return result;
    }

  render() {
      const { tasks, isDisplayForm } = this.state;

    return(
      
      <div className="container">
        <div className="text-center">
            <h1>Quản lý công việc</h1><hr/>
        </div>
        <div className="row">
          <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {/* Form */}
            { this.elmTaskForm(isDisplayForm) }
          </div>
          <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button 
                type="button" 
                className="btn btn-primary" 
                onClick={ this.onToggleForm }
            >
                <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>&nbsp;
            
            <Control /> 

            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <TaskList 
                        tasks={ tasks } 
                        onUpdateStatus={ this.onUpdateStatus } 
                        onDelete={ this.onDelete } 
                    />
                </div>
            </div>
          </div>
        </div>
      </div>  
        
    );
  }
}

export default App;
