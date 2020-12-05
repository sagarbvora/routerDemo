import {Route, BrowserRouter, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserData.css';
import React from 'react';
import SignUp from "./SignUp";
import Login from "./Login";
import User from "./User";
import userDashBord from "./userDashBord";
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/signUp" component={SignUp}/>
          <Route path="/user" component={User}/>
          <Route path="/edit/:id" component={SignUp}/>
          <Route path="/dashBord" component={userDashBord}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
