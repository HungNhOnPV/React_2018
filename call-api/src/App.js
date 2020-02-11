import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import routers from './routers';
import { BrowserRouter as Routers, Switch, Route } from 'react-router-dom';

class App extends Component {

    showContentMenus = routers => {
        let result = null;
        if(routers.length > 0) {
            result = routers.map((router, index) => {
                return (<Route
                        key={index}
                        path={router.path}
                        exact={router.exact}
                        component={router.main}
                        ></Route>);
            });
        }
        return <Switch>{result}</Switch>
    }

    render() {
        return (
            <Routers>
                <div>
                    <Menu />
                    <div className="container">
                        <div className="row">
                            {this.showContentMenus(routers)}
                        </div>
                    </div>
                </div>
            </Routers>
        );
    }
}

export default App;
