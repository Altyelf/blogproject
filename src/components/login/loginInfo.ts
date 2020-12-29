export const loginInfo: LoginInfo[] = [
  { id: 1,
    username: 'Jānis',
    password: 'kartupelis',
    admin: true,
    loggedin: false,
  },
  { id: 2,
    username: 'Anna',
    password: 'kartupelis',
    admin: false,
    loggedin: false,
  },
];

export interface LoginInfo {
    id: number,
    username: string,
    password: string,
    admin: boolean,
    loggedin: boolean,
}