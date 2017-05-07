import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Main } from '../components/Main';


const router = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            
            <Route path='about' component={About} />
            
            <IndexRoute component={About} />
        </Route>
    </Router>
);

export { router };