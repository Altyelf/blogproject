import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className='navigation'>
      <NavLink to="/">Home</NavLink>
      &nbsp; &nbsp;
      <NavLink to="/blog">Blog</NavLink>
      &nbsp;  &nbsp;
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};
