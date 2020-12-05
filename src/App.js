import {Route, BrowserRouter, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserData.css';
import React from 'react';
import SignUp from "./SignUp";
import Login from "./Login";
import User from "./User";
import UserDashBord from "./userDashBord";
import PrivateRoute from "./PrivateRouter";
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <PrivateRoute path="/user" component={User}/>
          <PrivateRoute path="/edit/:id" component={SignUp}/>
          <PrivateRoute path="/userDashBord" component={UserDashBord}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
