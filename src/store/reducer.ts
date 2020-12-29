import { combineReducers } from 'redux';
import { EDIT_POST, EditPostAction, LOGIN, AddLogin } from './action';
import { posts, Posts } from '../apiData/articles';
import { loginInfo, LoginInfo } from '../components/login/loginInfo';

export const reducer2 = (state: Posts[] = posts, action: EditPostAction) => {
  switch (action.type) {
    case EDIT_POST: {
      const newPosts = [...posts];
      const indexID = newPosts.findIndex((item) => item.id === action.id);
      posts[indexID].body = action.value;
      console.log('Call Action Post 2', newPosts[indexID].body);
      return newPosts;
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
      if (filteredUser.length === 1) {
        const newFilteredUser = filteredUser.map((item) => item.loggedin = true);
        console.log('this is logged in');
      }
      console.log('This is login', filteredUser);
      return newLoginInfo;
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ reducer2, reducer3 });
