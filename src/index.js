import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
//import App from './App';
import App from './components/app';
import Users from './components/users';
import Contact from './components/contact';

import * as serviceWorker from './serviceWorker';

/* npm install typeface-roboto --save */ // Alternate think about switching out from using CDN
const routing = (
    <Router>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />
        <div>
            <Route exact path="/" component={App} />
            <Route path="/users" component={Users} />
            <Route path="/contact" component={Contact} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); 

