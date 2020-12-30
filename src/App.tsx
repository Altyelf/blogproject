import React from 'react';
import './App.css';
import 'flexboxgrid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Post from './pages/post';
import { Header } from './components/header/header';
import Blog from './pages/blog';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route path="/posts/:ids">
          <Post />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
