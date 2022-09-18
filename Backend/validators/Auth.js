import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const LoginSchema = yup.object({
  username: yup
    .string()
    .required('username is required')
    .min(8, 'username must be at least 8 characters')
    .max(30, 'username can not be bigger than 30 characters'),
  password: yup.string().required('password is required'),
});

export const RegisterSchema = yup.object({
  username: yup
    .string()
    .required('username is required')
    .min(8, 'username must be at least 8 characters')
    .max(30, 'username can not be bigger than 30 characters'),
  password: yup.string().required('password is required'),
  phoneNumber: yup
    .string()
    .required('phone number is required')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(11, 'phone number is too short')
    .max(11, 'phone number is too long'),
});
