import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './containers/Home'
import MainPage from './containers/MainPage'

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/mainpage" component={MainPage} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
serviceWorker.unregister();
