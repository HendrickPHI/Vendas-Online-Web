import { useEffect } from 'react';

import { URL_ORDER_ID } from '../../../shered/constants/urls';
import { MethodsEnum } from '../../../shered/enums/methods.enum';
import { useRequests } from '../../../shered/hooks/useRequests';
import { useOrderReducer } from '../../../store/reducers/orderReducer/useOrderReducer';

export const useOrderDetail = (orderId?: string) => {
  const { order, setOrder } = useOrderReducer();
  const { request, loading } = useRequests();

  useEffect(() => {
    request(URL_ORDER_ID.replace('{orderId}', orderId || ''), MethodsEnum.GET, setOrder);
  }, []);

  return {
    order,
    loading,
  };
};
