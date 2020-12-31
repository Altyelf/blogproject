export const loginInfo: LoginInfo[] = [
  {
    id: 1,
    username: 'Jānis',
    password: 'kartupelis',
    admin: true,
  },
  {
    id: 2,
    username: 'Anna',
    password: 'kartupelis',
    admin: false,
  },
];

export interface LoginInfo {
  id: number,
  username: string,
  password: string,
  admin: boolean,
}

export const LoggedInUser: LoginInfo[] = [];