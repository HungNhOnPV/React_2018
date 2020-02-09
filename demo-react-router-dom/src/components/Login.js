import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state = {
        txtUsername: '',
        txtPassword: ''
    }

    onChange = event => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onLogin = event => {
        event.preventDefault();
        const { txtUsername, txtPassword } = this.state;

        if(txtPassword === 'admin' && txtPassword === 'admin') {
            localStorage.setItem('user', JSON.stringify({
                username: txtUsername,
                password: txtPassword
            }));
        }
    }

    render() {
        const { txtUsername, txtPassword } = this.state;
        const loggedInUser = localStorage.getItem('user');

        if(loggedInUser !== null) {
            const { location } = this.props;
            return (<Redirect to={{
                        pathname: '/products',
                        state: {
                            from: location
                        }
                    }} />)
        }
        return(
            
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <form onSubmit={this.onLogin}>
                            <legend>Login</legend>
                        
                            <div className="form-group">
                                <label>User name: </label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="txtUsername" 
                                    value={txtUsername}
                                    onChange={this.onChange}
                                />

                                <label>Password: </label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    name="txtPassword" 
                                    value={txtPassword}
                                    onChange={this.onChange}
                                />
                            </div>
                        
                            
                        
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Login;