import React from 'react';
import './loginStyle.css';

type Props = {
  username: string;
  password: string;
  setUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
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
      <h1 className='header'>Login here</h1>
      <form className="login" onSubmit={submitHandler}>
        <label className="username" htmlFor="username">
          Username
          <input
            required
            className="input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e)}
          />
        </label>
        <label className="password" htmlFor="password">
          Password
          <input
            required
            className="input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e)}
          />
        </label>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>

    </div>
  );
};
