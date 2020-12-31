export const userData: UserData[] = [
    {
      username: 'Jānis',
      password: 'kartupelis',
      admin: true,
      loggedin: false,
    },
    {
      username: 'Anna',
      password: 'kartupelis',
      admin: false,
      loggedin: false,
    },
  ];
  
  export interface UserData {
    username: string;
    password: string;
    admin: boolean;
    loggedin: boolean;
  }
  