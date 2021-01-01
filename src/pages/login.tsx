import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginCred } from '../components/login/loginCred';
import { Logout } from '../components/login/logout';
import { addLogin, addLogout } from '../store/action';
import { RootState } from '../store/reducer';
import { loginInfo } from '../components/login/loginInfo';

const Login = () => {
  const logoutData = useSelector((state: RootState) => state.reducer3);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const usernameHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPassword(e.target.value);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filteredUser = loginInfo.find(
      (item) => item.username === username && item.password === password
    );
    if (!filteredUser) {
      alert('Your user name or password is incorrect!');
      return;
    }
    dispatch(addLogin(filteredUser));
  };

  return (
    <>
      {!logoutData?.username ? (
        <div>
          <LoginCred
            username={username}
            password={password}
            // @ts-ignore
            setUsername={(e) => usernameHandler(e)}
            // @ts-ignore
            setPassword={(e) => passwordHandler(e)}
            submitHandler={(e) => submit(e)}
          />
        </div>) : (
          <div>
            <Logout logoutHandler={() => dispatch(addLogout())} />
          </div>)}
    </>
  );
};

export default Login;
