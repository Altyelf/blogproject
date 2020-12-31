import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginCred } from '../components/login/loginCred';
import { LoginInfo } from '../components/login/loginInfo';
import { Logout } from '../components/login/logout';
import { addLogin, addLogout } from '../store/action';
import { RootState } from '../store/reducer';

const Login = () => {
  const loginData = useSelector((state: LoginInfo[]) => state);
  const logoutData = useSelector((state: RootState) => state.reducer2);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPassword(e.target.value);
  };
  console.log('data', logoutData);

  return (
    <>
      {logoutData.length === 0 ? (
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
        </div>) : (
          <div>
            <Logout logoutHandler={() => dispatch(addLogout())} />
          </div>)}
    </>
  );
};

export default Login;
