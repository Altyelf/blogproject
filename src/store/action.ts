/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { Dispatch } from 'redux';
import {Posts} from '../apiData/articles';

export const LOGIN = 'LOGIN';
export const EDIT_POST = 'EDIT_POST';
export const SET_POST = 'SET_POST';
export const LOGOUT = 'LOGOUT';


export type AddLogin = {
  type: typeof LOGIN;
  id: number;
  username: string;
  password: string;
};

export const addLogin = (username: string, password: string) => {
  return {
    type: 'LOGIN',
    username,
    password,
  };
};

export type AddLogout = {
  type: typeof LOGOUT;
};

export const addLogout = () => {
  return {
    type: 'LOGOUT'
  };
};

export type EditPostAction = {
  type: typeof EDIT_POST;
  value: string;
  id: number;
};

export const editPost = (value: string, id: number) => {
  return {
    type: 'EDIT_POST',
    value,
    id,
  };
};

export const fetchPosts = (data: Posts[]) => {
  return {
    type: SET_POST,
    data
  };
};

export type SetPostAction = {
  type: typeof SET_POST;
  data: Posts[];
};


export const fetchPostsData =  () => {
  return async (dispatch: Dispatch) => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts/');
    dispatch(fetchPosts(data.data));
    console.log(dispatch(fetchPosts(data.data)));
  };
};