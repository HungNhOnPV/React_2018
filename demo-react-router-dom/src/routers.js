import React from 'react';

import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Products from './components/Products';
import Product from './components/Product';

const routers = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/products',
        exact: false,
        main: ({match}) => <Products match={match} />
    },
    {
        path: '/products/:name',
        exact: false,
        main: ({match}) => <Product match={match} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
]

export default routers;