import { RouteObject } from 'react-router-dom';

import Cart from './';

export enum CategoryRoutesEnum {
  CART = '/cart',
}

export const cartScreens: RouteObject[] = [
  {
    path: CartRoutesEnum.CART,
    element: <Cart />,
  },
];
