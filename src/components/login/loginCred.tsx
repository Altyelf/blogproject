import React, { useState } from 'react';
import './loginStyle.css';

const LoginCred = () => {
  const [{ username, password }, setCredentials] = useState({
    username: '',
    password: '',
  });

  return (
    <div className="container">
      <form className="login">
        <label htmlFor="username">
          Username
          <input
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setCredentials({
                username: e.target.value,
                password,
              })}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) =>
              setCredentials({
                username,
                password: e.target.value,
              })}
          />
        </label>
      </form>
      <button type="submit">Login</button>
    </div>
  );
};

export default LoginCred;
