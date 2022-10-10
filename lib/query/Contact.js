import { useMutation } from 'react-query';
import { createRequest } from '../api/Contact';

export function useCreateRequest(onSuccess, onError) {
  return useMutation(createRequest, {
    onSuccess,
    onError,
  });
}
