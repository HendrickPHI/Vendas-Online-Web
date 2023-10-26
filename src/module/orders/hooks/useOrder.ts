import { useEffect } from 'react';

import { URL_ORDER_ALL } from '../../../shered/constants/urls';
import { MethodsEnum } from '../../../shered/enums/methods.enum';
import { useRequests } from '../../../shered/hooks/useRequests';
import { useOrderReducer } from '../../../store/reducers/orderReducer/useOrderReducer';

export const useOrder = () => {
  const { request } = useRequests();
  const { orders, setOrders } = useOrderReducer();

  useEffect(() => {
    if (!orders || orders.length === 0) {
      request(URL_ORDER_ALL, MethodsEnum.GET, setOrders);
    }
  }, []);

  return {
    orders,
  };
};
