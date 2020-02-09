import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: false
    },
    {
      name: 'Products',
      to: '/products',
      exact: false
    },
    {
      name: 'Login',
      to: '/login',
      exact: false
    }
];

const MenuLink = ({label, to, activeOnlyWhenExact}) => {

    return (
      <Route path={to} exact={activeOnlyWhenExact} children={({math}) => {
        var active = math ? 'active' : '';
        return (
          <li className={`my-li ${active}`}>
            <Link to={to} className='my-link'>
              {label}
            </Link>
          </li>
        )
      }}/>
    )
  }

class Menu extends Component {
    
    showMenus = menus => {
        let result = null;

        if(menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink 
                        key={index}
                        label={menu.name} 
                        to={menu.to} 
                        activeOnlyWhenExact={menu.exact} />
                )
            })
        }
        return result;
    }

    render() {
        return(
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav flex-row">
                { this.showMenus(menus) }
                </ul>
            </nav>
            
        );
    }
}

export default Menu;