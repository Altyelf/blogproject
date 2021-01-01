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
  {
    id: 3,
    username: 'k',
    password: 'k',
    admin: false,
  }
];

export interface LoginInfo {
  id?: number,
  username?: string,
  password?: string,
  admin?: boolean,
}

