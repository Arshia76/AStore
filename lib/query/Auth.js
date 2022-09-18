import { useMutation } from 'react-query';
import { Register } from '../api/Auth';

export function useRegister(onSuccess, onError) {
  return useMutation(Register, {
    onSuccess,
    onError,
  });
}
