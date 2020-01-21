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

    onGenerateData = () => {
        const tasks = [
            {
                id: this.generateId(),
                name: 'Choi',
                status: true
            },
            {
                id: this.generateId(),
                name: 'Hoc',
                status: false
            },
            {
                id: this.generateId(),
                name: 'Ngu',
                status: true
            }
        ];
        
        this.setState({
            tasks: tasks
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateId = () => {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() 
                + '-' + this.s4() + this.s4() + this.s4();
    }

    elmTaskForm = value => value ? <TaskForm  isDisplayForm={ this.state.isDisplayForm } onCloseForm={ this.onCloseForm } /> : '';

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
            <button 
                type="button" 
                className="btn btn-danger"
                onClick={ this.onGenerateData }
                >
                Generate Data
            </button>

            
            <Control /> 

            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <TaskList tasks={ tasks } />
                </div>
            </div>
          </div>
        </div>
      </div>  
        
    );
  }
}

export default App;
