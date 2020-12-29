// export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';

// export type AddPostAction = {
//   type: typeof ADD_POST;
//   id: number;
// };

// export const addPost = (id: number) => {
//   return {
//     type: 'ADD_POST',
//     id,
//   };
// };

export type EditPostAction = {
  type: typeof EDIT_POST;
  value: string;
  id: number
};

export const editPost = (value: string, id: number) => {
  return {
    type: 'EDIT_POST',
    value,
    id
  };
};

