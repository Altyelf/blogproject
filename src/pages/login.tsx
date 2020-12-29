import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginCred } from '../components/login/loginCred';
import { LoginInfo } from '../components/login/loginInfo';
import { addLogin } from '../store/action';

const Login = () => {
  const loginData = useSelector((state: LoginInfo[]) => state);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div>
        <LoginCred
          username={username}
          password={password}
          // @ts-ignore
          setUsername={(e) => usernameHandler(e)}
          // @ts-ignore
          setPassword={(e) => passwordHandler(e)}
          submitHandler={() => dispatch(addLogin(username, password))}
        />
      </div>
    </>
  );
};

export default Login;
