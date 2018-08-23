import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path='/signup' component={Signup} />
            <Route path='/signin' component={Signin} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
