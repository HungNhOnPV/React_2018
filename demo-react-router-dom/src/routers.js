import React, { Component } from 'react';

import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

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
        path: '',
        exact: false,
        main: () => <NotFound />
    }
]

export default routers;