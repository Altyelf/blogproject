import React, { useState } from 'react';
import './loginStyle.css';

type Props = {
  logoutHandler: () => void;
};

export const Logout = ({
  logoutHandler,
}: Props) => {
  return (
    <div className="container">
      <h1>Logout here</h1>
      <button className="logout-button" type="submit" onClick={() => logoutHandler()}>
        Logout
      </button>
    </div>
  );
};