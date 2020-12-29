import React, { useState } from 'react';
import './loginStyle.css';

type Props = {
  username: string;
  password: string;
  setUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: () => void;
};

export const LoginCred = ({ username, password, setUsername, setPassword, submitHandler }: Props) => {
  return (
    <div className="container">
      <form className="login">
        <label htmlFor="username">
          Username
          <input placeholder="Username" value={username} onChange={(e) => setUsername(e)} />
        </label>
        <label htmlFor="password">
          Password
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e)}
          />
        </label>
      </form>
      <button type="submit" onClick={() => submitHandler()}>Login</button>
    </div>
  );
};
