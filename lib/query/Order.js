import { useMutation, useQuery } from 'react-query';
import { createOrder, getOrder, getUserOrders } from '../api/Order';
import * as keys from './keys';

export function useCreateOrder(onSuccess, onError) {
  return useMutation(createOrder, {
    onSuccess,
    onError,
  });
}

export function useGetUserOrders(id, onSuccess, onError) {
  return useQuery([keys.GET_USER_ORDERS, id], () => getUserOrders(id), {
    onSuccess,
    onError,
    retry: false,
  });
}

export function useGetOrder(id, onSuccess, onError) {
  return useQuery([keys.GET_ORDER, id], () => getOrder(id), {
    onSuccess,
    onError,
    retry: false,
  });
}
