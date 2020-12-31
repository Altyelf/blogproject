import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
import { Nav } from './components/blog/nav';
import { fetchPostsData, fetchCommentsData } from './store/action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsData());
    dispatch(fetchCommentsData());
  }, []);

  return (
    <>
      <Router>
        <Nav />
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


    </>
  );
};




export default App;
