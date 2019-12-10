import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Exchange from './app/Exchange'
import Test from './app/Test'

import './scss/index.scss';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Exchange} />
                <Route exact path="/exchange" component={Exchange} />
                <Route exact path="/test" component={Test} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
