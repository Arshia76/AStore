import Input from '../../../Shared/Input';
import Button from '../../../Shared/Button';
import styles from './Shipping.module.css';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Shipping = () => {
  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    family: yup.string().required('Family is required'),
    country: yup.string().required('Country is required'),
    province: yup.string().required('Country is required'),
    city: yup.string().required('Country is required'),
    location: yup.string().required('Country is required'),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      family: '',
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
          name={'name'}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label='Name'
          type='text'
          error={
            formik.errors.name && formik.touched.name
              ? formik.errors.name
              : null
          }
        />
        <Input
          className='Shipping'
          containerClassName='Shipping'
          mainContainerClassName='Shipping'
          labelClassName='Shipping'
          errorClassName='Shipping'
          name={'family'}
          value={formik.values.family}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label='Family'
          type='text'
          error={
            formik.errors.family && formik.touched.family
              ? formik.errors.family
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
        <Button className={'Shipping'} title='Continue' />
      </form>
    </div>
  );
};

export default Shipping;
