import React from 'react';
import { Nav } from '../navigation/nav';
import './header.css';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="nav">
          <Nav />
        </div>
      </div>
    </header>
  );
};
