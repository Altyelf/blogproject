import React from 'react';
import './App.css';
import 'flexboxgrid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Post from './pages/post';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts/:ids">
          <Post />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
