import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LoadableComponent from './hocs/LoadableComponent';


/* 布局页面 */
const Layout = LoadableComponent(() => import('./layout'));
/* 404界面 */
const NotFound = LoadableComponent(() => import('./components/NotFound'));

function App() {
    return (
        <Router>
            <Switch>
                {/* <Route exact path='/' component={NotFound}/> */}
                <Layout />
            </Switch>
        </Router>
    )
}

export default App;
