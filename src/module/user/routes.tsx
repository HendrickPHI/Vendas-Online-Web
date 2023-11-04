import { RouteObject } from 'react-router-dom';

import User from './screens/User';
import UserInsert from './screens/UserInsert';
import UserInsertAdm from './screens/UserInsertAdm';

export enum UserRoutesEnum {
  USER_ADM = '/admin',
  USER = '/user',
  USER_INSERT = '/user/insert',
}

export const userScreens: RouteObject[] = [
  {
    path: UserRoutesEnum.USER_ADM,
    element: <UserInsertAdm />,
  },
  {
    path: UserRoutesEnum.USER,
    element: <User />,
  },
  {
    path: UserRoutesEnum.USER_INSERT,
    element: <UserInsert />,
  },
];
