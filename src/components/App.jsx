import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import Exchanger from '@/components/Exchanger'

export default function App () {
    return (
        <Router>
            <Switch>
                <Route path="/registration" component={Registration} />
                <Route path="/exchanger" component={Exchanger} />
                <Redirect to="/registration" />
            </Switch>
        </Router>
    )
} 


function Registration() {
    return (
        <h1>REGISTRATION</h1>
    )
}