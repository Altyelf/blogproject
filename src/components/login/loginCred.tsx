import React, { useState } from 'react';
import './loginStyle.css';

type Props = {
  username: string;
  password: string;
  setUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: () => void;
};

export const LoginCred = ({
  username,
  password,
  setUsername,
  setPassword,
  submitHandler,
}: Props) => {
  return (
    <div className="container">
      <h1>Login here</h1>
      <form className="login">
        <label className="text" htmlFor="username">
          Username
          <input
            className="input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e)}
          />
        </label>
        <label className="text" htmlFor="password">
          Password
          <input
            className="input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e)}
          />
        </label>
      </form>
      <button className="login-button" type="submit" onClick={() => submitHandler()}>
        Login
      </button>
    </div>
  );
};
