
import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";

import Login from "./components/LoginBox";
// import Home from "./components/home/Home";
//import history from "./history";

// import { PrivateRoute } from "./private.route";

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />

                    {/* <PrivateRoute exact path="/home" component={Home} /> */}
                </Switch>
            </Router>
        )
    }
}