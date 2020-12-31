import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Nav: FC = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      &nbsp; &nbsp;
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};
