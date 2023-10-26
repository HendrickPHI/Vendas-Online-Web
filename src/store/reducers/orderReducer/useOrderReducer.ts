import { useDispatch } from 'react-redux';

import { OrderType } from '../../../shered/types/OrderType';
import { useAppSelector } from '../../hooks';
import { setOrderAction, setOrdersAction } from '.';

export const useOrderReducer = () => {
  const dispatch = useDispatch();
  const { orders, order } = useAppSelector((state) => state.orderReducer);

  const setOrders = (orders: OrderType[]) => {
    dispatch(setOrdersAction(orders));
  };

  const setOrder = (order: OrderType) => {
    dispatch(setOrderAction(order));
  };

  return {
    order,
    orders,
    setOrders,
    setOrder,
  };
};
