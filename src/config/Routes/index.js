import React from 'react';
import {
    BrowserRouter as Router,Route, Switch} from "react-router-dom";
import About from '../../components/pages/About';
import Dashboard from '../../components/pages/Dashboard';
import InputUser from '../../components/pages/InputUser';
import Login from '../../components/pages/Login';
import Register from '../../components/pages/Register';
import Register2 from '../../components/pages/Register2';



const index = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route path="/login">
                    <Login title="Welcome"/>
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/register2">
                    <Register2 />
                </Route>
                {/* <Route path="/register">
                    <Register />
                </Route>  */}
                <Route path="/input">
                    <InputUser />
                </Route>
            </Switch>
        </Router>
    )
}

export default index;