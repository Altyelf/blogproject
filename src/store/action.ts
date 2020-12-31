/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { Dispatch } from 'redux';
import { Posts, CommentData } from '../apiData/articles';

export const LOGIN = 'LOGIN';
export const EDIT_POST = 'EDIT_POST';
export const SET_POST = 'SET_POST';
export const SET_COMMENTS = 'SET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';

export const addComment = () => {
  return {
    type: ADD_COMMENT 

  };
};


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

export type EditPostAction = {
  type: typeof EDIT_POST;
  value: string ;
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


export const fetchPostsData = () => {
  return async (dispatch: Dispatch) => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts/');
    dispatch(fetchPosts(data.data));
  };
};

export const fetchComments = (data: CommentData[]) => {
  return {
    type: SET_COMMENTS,
    data
  };
};

export type SetCommentAction = {
  type: typeof SET_COMMENTS;
  data: CommentData[];
};


export const fetchCommentsData = () => {
  return async (dispatch: Dispatch) => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/comments/');
    dispatch(fetchComments(data.data));
  };
};