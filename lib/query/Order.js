import { useMutation } from 'react-query';
import { createOrder, getUserOrders } from '../api/Order';

export function useCreateOrder(onSuccess, onError) {
  return useMutation(createOrder, {
    onSuccess,
    onError,
  });
}
