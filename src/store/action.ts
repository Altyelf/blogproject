export const LOGIN = 'LOGIN';
export const EDIT_POST = 'EDIT_POST';

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
