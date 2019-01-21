import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Page404 from './components/Page404';

import 'bootstrap/dist/css/bootstrap.min.css';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {

  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
              <Navbar />
                <div className="container">
                <Switch>
                      <Route exact path="/" component={ Home } />
                      <Route path="/register" component={ Register } />
                      <Route path="/login" component={ Login } />
                      <Route path="*" component={ Page404 } />
                </Switch>
                </div>
            </div>
          </Router>
      </Provider>
    );
  }
}

export default App;
