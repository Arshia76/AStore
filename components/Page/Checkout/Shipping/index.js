import Input from '../../../Shared/Input';
import Button from '../../../Shared/Button';
import styles from './Shipping.module.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useCreateOrder } from '../../../../lib/query/Order';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Resource from '../../../../public/Resource';
import { clearCart } from '../../../../store/features/cartSlice';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useSession } from 'next-auth/react';

const Shipping = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: user } = useSession();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = yup.object({
    firstName: yup.string().required('firstName is required'),
    lastName: yup.string().required('lastName is required'),
    phoneNumber: yup
      .string()
      .required('phone number is required')
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(11, 'phone number is too short')
      .max(11, 'phone number is too long'),
    country: yup.string().required('Country is required'),
    province: yup.string().required('Province is required'),
    city: yup.string().required('City is required'),
    location: yup.string().required('location is required'),
  });

  const onCreateOrderSuccess = () => {
    toast.success('Order Placed Successfully');
    dispatch(clearCart());
    router.replace(Resource.Routes.HOME);
  };

  const onCreateOrderFail = (error) => {
    error.response.data.error.errors.forEach((err) => toast.error(err));
  };

  const { mutate: createOrder, isLoading } = useCreateOrder(
    onCreateOrderSuccess,
    onCreateOrderFail
  );

  const onSubmit = (values) => {
    console.log('called');
    const data = {
      user: {
        _id: user.id,
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber.toString(),
      },
      address: {
        country: values.country,
        province: values.province,
        city: values.city,
        location: values.location,
      },
      orders: cartItems.map((item) => ({
        productId: item.id.toString(),
        productName: item.title,
        productCategory: item.category,
        productImage: item.image,
        productPrice: item.price.toString(),
        productCount: item.count ? item.count.toString() : '1',
      })),
    };
    createOrder(data);
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      country: '',
      province: '',
      city: '',
      location: '',
    },
    validationSchema,
    onSubmit,
  });
  return (
    <div className={styles.Shipping}>
      <h4>SHIPPING</h4>
      <form onSubmit={formik.handleSubmit} className={styles.Inputs}>
        <Input
          className='Shipping'
          containerClassName='Shipping'
          mainContainerClassName='Shipping'
          labelClassName='Shipping'
          errorClassName='Shipping'
          name={'firstName'}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label='FirstName'
          type='text'
          error={
            formik.errors.firstName && formik.touched.firstName
              ? formik.errors.firstName
              : null
          }
        />
        <Input
          className='Shipping'
          containerClassName='Shipping'
          mainContainerClassName='Shipping'
          labelClassName='Shipping'
          errorClassName='Shipping'
          name={'lastName'}
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label='LastName'
          type='text'
          error={
            formik.errors.lastName && formik.touched.lastName
              ? formik.errors.lastName
              : null
          }
        />
        <Input
          className='Shipping'
          containerClassName='Shipping'
          mainContainerClassName='Shipping'
          labelClassName='Shipping'
          errorClassName='Shipping'
          name={'phoneNumber'}
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label='PhoneNumber'
          type='text'
          error={
            formik.errors.phoneNumber && formik.touched.phoneNumber
              ? formik.errors.phoneNumber
              : null
          }
        />
        <Input
          className='Shipping'
          containerClassName='Shipping'
          mainContainerClassName='Shipping'
          labelClassName='Shipping'
          errorClassName='Shipping'
          name={'country'}
          value={formik.values.country}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label='Country'
          type='text'
          error={
            formik.errors.country && formik.touched.country
              ? formik.errors.country
              : null
          }
        />
        <Input
          className='Shipping'
          containerClassName='Shipping'
          mainContainerClassName='Shipping'
          labelClassName='Shipping'
          errorClassName='Shipping'
          name={'province'}
          value={formik.values.province}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label='Province'
          type='text'
          error={
            formik.errors.province && formik.touched.province
              ? formik.errors.province
              : null
          }
        />
        <Input
          className='Shipping'
          containerClassName='Shipping'
          mainContainerClassName='Shipping'
          labelClassName='Shipping'
          errorClassName='Shipping'
          name={'city'}
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label='City'
          type='text'
          error={
            formik.errors.city && formik.touched.city
              ? formik.errors.city
              : null
          }
        />
        <Input
          className='Shipping'
          containerClassName='Shipping'
          mainContainerClassName='Shipping'
          labelClassName='Shipping'
          errorClassName='Shipping'
          name={'location'}
          value={formik.values.location}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label='Location'
          type='text'
          kind='textarea'
          error={
            formik.errors.location && formik.touched.location
              ? formik.errors.location
              : null
          }
        />
        <Button
          className={'Shipping'}
          title={!isLoading && 'Place Order'}
          disabled={isLoading}
          img={
            isLoading && <AiOutlineLoading3Quarters size={25} color='black' />
          }
          isLoader={true}
        />
      </form>
    </div>
  );
};

export default Shipping;
