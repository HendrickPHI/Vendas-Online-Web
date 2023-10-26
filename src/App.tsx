import type { Router as RemixRouter } from '@remix-run/router';
import { useEffect } from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { categoryScreens } from './module/category/routes';
import { firstScreenRoutes } from './module/firstScreen/routes';
import { loginRoutes } from './module/login/routes';
import { orderScreens } from './module/orders/routes';
import { productScreens } from './module/product/routes';
import { userScreens } from './module/user/routes';
import { URL_USER } from './shered/constants/urls';
import { MethodsEnum } from './shered/enums/methods.enum';
import { getAuthorizationToken, verifyLoggedIn } from './shered/functions/connection/auth';
import { useNotification } from './shered/hooks/useNotification';
import { useRequests } from './shered/hooks/useRequests';
import { useGlobalReducer } from './store/reducers/globalReducer/useGlobalReducer';

const routes: RouteObject[] = [...loginRoutes];
const routesLoggedIn: RouteObject[] = [
  ...productScreens,
  ...categoryScreens,
  ...firstScreenRoutes,
  ...userScreens,
  ...orderScreens,
].map((route) => ({
  ...route,
  loader: verifyLoggedIn,
}));

const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggedIn]);

function App() {
  const { contextHolder } = useNotification();
  const { setUser } = useGlobalReducer();
  const { request } = useRequests();

  useEffect(() => {
    const token = getAuthorizationToken();
    if (token) {
      request(URL_USER, MethodsEnum.GET, setUser);
    }
  }, []);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
