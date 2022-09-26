import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const OrderSchema = yup.object({
  user: yup.object({
    _id: yup.string().required('user id is required'),
    firstName: yup.string().required('Please Enter fisrtName'),
    lastName: yup.string().required('Please Enter lastName'),
    phoneNumber: yup
      .string()
      .required('phone number is required')
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(11, 'phone number is too short')
      .max(11, 'phone number is too long'),
  }),
  address: yup.object({
    country: yup.string().required('Please Enter country'),
    province: yup.string().required('Please Enter province'),
    city: yup.string().required('Please Enter city'),
    location: yup
      .string()
      .required('Please Enter current location')
      .max(255, 'location cannot exceed 255 characters'),
  }),
  orders: yup.array().of(
    yup.object({
      productName: yup.string().required('Please Enter ProductName'),
      productPrice: yup.string().required('Please Enter ProductPrice'),
      productCount: yup.string().required('Please Enter ProductCount'),
    })
  ),
});
