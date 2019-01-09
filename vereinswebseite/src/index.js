import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './containers/Login'

ReactDOM.render(
    <Router>
        <div>
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
        </div>
    </Router>,
    document.getElementById('root'));
