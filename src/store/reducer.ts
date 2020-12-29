import { combineReducers } from 'redux';
import { EDIT_POST, EditPostAction } from './action';
import { posts, Posts } from '../apiData/articles';

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

// export const rootReducer = combineReducers({ reducer2});