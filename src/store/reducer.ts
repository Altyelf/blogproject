import { cloneDeep } from 'lodash';
import { combineReducers } from 'redux';
import { EDIT_POST, EditPostAction, LOGIN, AddLogin, SET_POST, SetPostAction, SET_COMMENTS, SetCommentAction, AddLogout, LOGOUT, ADD_COMMENT, AddComment } from './action';
import { posts, Posts, commnetData, CommentData } from '../apiData/articles';
import { LoginInfo } from '../components/login/loginInfo';

export const articleReducer = (state: Posts[] = posts, action: SetPostAction | EditPostAction) => {
  switch (action.type) {
    case SET_POST: {
      return action.data;
    }
    case EDIT_POST: {
      const newPosts = cloneDeep(state);
      const indexID = newPosts.findIndex((item) => item.id === action.id);
      newPosts[indexID].body = action.value;
      return newPosts;
    }
    default:
      return state;
  }
};

export const commentReducer = (state: CommentData[] = commnetData, action: SetCommentAction | AddComment) => {
  switch (action.type) {
    case SET_COMMENTS: {
      return action.data;
    }
    // case ADD_COMMENT: {
    //   return state.push(action.comment);
    // }
    default:
      return state;
  }
};

const LoggedInUser: LoginInfo = {};
export const reducer3 = (state: LoginInfo = LoggedInUser, action: AddLogin | AddLogout) => {
  switch (action.type) {
    case LOGIN: {
      return action.user;
    }
    case LOGOUT: {
      return {};
    }
    default:
      return state;
  }
};



export const rootReducer = combineReducers({ articleReducer, commentReducer, reducer3 });
export type RootState = ReturnType<typeof rootReducer>;
