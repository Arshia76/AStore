import { useState } from 'react';
import Input from '../../../../Shared/Input';
import Button from '../../../../Shared/Button';
import styles from './ContactForm.module.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useCreateRequest } from '../../../../../lib/query/Contact';
import { toast } from 'react-toastify';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const onCreateSuccess = () => {
    toast.success('Your Message Has Been Send Successfully');

    setLoading(false);
    formik.resetForm();
  };

  const onCreateFail = (error) => {
    toast.error(error.response.data.message) ||
      error.response.data.error.errors.forEach((err) => toast.error(err));

    setLoading(false);
  };

  const { mutate: createRequest, isSuccess } = useCreateRequest(
    onCreateSuccess,
    onCreateFail
  );

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    setLoading(true);
    createRequest(values);
  };

  const EmailRegex =
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
  const validationSchema = yup.object({
    fullName: yup.string().required('FullName is required'),

    email: yup
      .string()
      .required('email is required')
      .matches(EmailRegex, 'email is not valid'),
    title: yup.string().required('title is required'),
    message: yup.string().required('message is required'),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      title: '',
      message: '',
    },
    validationSchema,
    onSubmit,
  });
  return (
    <div className={styles.ContactForm}>
      <h2
        style={{ fontSize: '35px', fontWeight: 'bold', marginBottom: '20px' }}
      >
        Contact Us
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <Input
          type='text'
          className='ContactForm'
          errorClassName='ContactForm'
          mainContainerClassName='ContactForm'
          name='fullName'
          placeholder='FullName'
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.fullName && formik.touched.fullName
              ? formik.errors.fullName
              : null
          }
        />
        <Input
          type='text'
          className='ContactForm'
          errorClassName='ContactForm'
          mainContainerClassName='ContactForm'
          name='email'
          placeholder='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.email && formik.touched.email
              ? formik.errors.email
              : null
          }
        />
        <Input
          type='text'
          className='ContactForm'
          errorClassName='ContactForm'
          mainContainerClassName='ContactForm'
          name='title'
          placeholder='title'
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.title && formik.touched.title
              ? formik.errors.title
              : null
          }
        />
        <Input
          type='text'
          kind='textarea'
          className='ContactForm'
          errorClassName='ContactForm'
          mainContainerClassName='ContactForm'
          name='message'
          placeholder='message'
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.message && formik.touched.message
              ? formik.errors.message
              : null
          }
        />
        <Button
          title={!loading && 'Submit'}
          disabled={loading}
          isLoader={true}
          img={loading && <AiOutlineLoading3Quarters size={25} color='white' />}
          className='ContactForm'
        />
      </form>
    </div>
  );
};

export default ContactForm;
