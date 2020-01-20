import React from 'react';
import './App.css';

class App extends React.Component {
    state = {
        txtUsername: '',
        txtPassword: '',
        txtDesc: '',
        sltGender: 1,
        rdLang: 'vi',
        chkbStatus: true
    }

    onHandleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    onHandleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            
            <div className="container mt-30">
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                    <h3 className="panel-title">Form</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={ this.onHandleSubmit } >
                                
                                    <div className="form-group">
                                        <label>User name: </label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            value={ this.state.txtUsername }
                                            onChange={ this.onHandleChange } 
                                            name="txtUsername" 
                                        />
                                        
                                        <label>Password: </label>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            value={ this.state.txtPassword }
                                            onChange={ this.onHandleChange } 
                                            name="txtPassword" 
                                        />

                                        <label>Describe: </label>
                                        <textarea 
                                            className="form-control" 
                                            rows="3" 
                                            name="txtDesc"
                                            value={ this.state.txtDesc }
                                            onChange={ this.onHandleChange } 
                                        ></textarea>

                                        <label>Gender: </label>
                                        <select 
                                            className="form-control"
                                            name="sltGender" 
                                            value={ this.state.sltGender }
                                            onChange={ this.onHandleChange }
                                            >
                                            <option value={0}>Nữ</option>
                                            <option value={1}>Nam</option>
                                            <option value={2}>Khác</option>
                                        </select>
                                        <br/>

                                        <label>Language: </label>
                                        <div className="radio">
                                            <label>
                                                <input 
                                                    type="radio" 
                                                    name="rdLang" 
                                                    value="en" 
                                                    onChange={ this.onHandleChange } 
                                                    checked={ this.state.rdLang === 'en'}
                                                    />
                                                English
                                            </label>
                                            <br/>
                                            <label>
                                                <input 
                                                    type="radio" 
                                                    name="rdLang" 
                                                    value="vi"
                                                    onChange={ this.onHandleChange } 
                                                    checked={ this.state.rdLang === 'vi'}
                                                    />
                                                Vietnamese
                                            </label>
                                        </div>

                                        <label>dwad</label>
                                        <div className="checkbox">
                                            <label>
                                                <input 
                                                    type="checkbox" 
                                                    name="chkbStatus"
                                                    value={true}
                                                    onChange={ this.onHandleChange } 
                                                    checked={ this.state.chkbStatus === true }
                                                />
                                                Active
                                            </label>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                                    <button type="reset" className="btn btn-default">Delete white</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               
        );
    }
}

export default App;
