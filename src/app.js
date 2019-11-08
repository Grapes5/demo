import React from 'react';
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import LoadableComponent from './hocs/LoadableComponent';


/* 布局页面 */
const Layout = LoadableComponent(() => import('./layout'));
/* 404界面 */
const NotFound = LoadableComponent(() => import('./components/NotFound'));

function App() {
    return (
        <Router>
            <Switch>
                <Layout />
                <Route component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default App;
