import { cloneDeep } from 'lodash';
import { combineReducers } from 'redux';
import { EDIT_POST, EditPostAction, LOGIN, AddLogin, SET_POST, SetPostAction, SET_COMMENTS, SetCommentAction } from './action';
import { posts, Posts, commnetData, CommentData } from '../apiData/articles';
import { loginInfo, LoginInfo } from '../components/login/loginInfo';


export const articleReducer = (state: Posts[] = posts, action: SetPostAction | EditPostAction) => {
  switch (action.type) {
    case SET_POST: {
      return action.data;
    }
    case EDIT_POST: {   
      console.log('Action', action.value);
      const newPosts = cloneDeep(state);
      const indexID = newPosts.findIndex((item) => item.id === action.id);
      newPosts[indexID].body = action.value;
      return newPosts;
    }
    default:
      return state;
  }
};

export const commentReducer = (state: CommentData[] = commnetData, action: SetCommentAction) => {
  switch (action.type) {
    case SET_COMMENTS: {
      return action.data;
    }
    default:
      return state;
  }
};


export const reducer3 = (state: LoginInfo[] = loginInfo, action: AddLogin) => {
  switch (action.type) {
    case LOGIN: {
      const newLoginInfo = [...loginInfo];
      const filteredUser = newLoginInfo.filter(
        (item) => item.username === action.username && item.password === action.password
      );
      // if (filteredUser.length === 1) {
      //   const newFilteredUser = filteredUser.map((item) => item.loggedin === true);
      //   // newFilteredUser = [true];
      //   console.log('this is logged in');
      // }
      console.log('This is login', filteredUser);
      return newLoginInfo;
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ articleReducer, commentReducer, reducer3 });
export type RootState = ReturnType<typeof rootReducer>;
