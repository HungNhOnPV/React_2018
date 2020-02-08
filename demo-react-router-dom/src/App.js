import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

// import TopMenu from './components/TopMenu';
// import Products from './pages/Products';
import routers from './routers';

// import { CartProvider } from "./contexts/Cart"
import Menu from './components/Menu';

// const Index = () => <h2>Home</h2>;

class App extends React.Component {

  showContentMenus = routers => {
    let result = null;

    if(routers.length > 0) {
      result = routers.map((router, index) => {
        return (
          <Route 
            key={index}
            path={router.path} 
            exact={router.exact} 
            component={router.main} 
          />
        );
      });
    }
    return result;
  }
  
  render() {
    return (
      // <CartProvider>
      <Router>
      <div className="App">
        {/* <TopMenu /> */}

        <Menu />

        <Switch>
          { this.showContentMenus(routers) }
        </Switch>

        {/* <Route path="/" exact component={Index} />
        <Route path="/products/" exact component={Products} /> */}
      </div>
      </Router>
      // </CartProvider>
    );
  }
}

export default App;
