import Input from '../../../../Shared/Input';
import Button from '../../../../Shared/Button';
import styles from './ContactForm.module.css';
import { useFormik } from 'formik';
import * as yup from 'yup';

const ContactForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const email =
    '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';
  const validationSchema = yup.object({
    fullName: yup.string().required('FullName is required'),

    email: yup
      .string()
      .required('email is required')
      .matches(email, 'email is not valid'),
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
        <Button title='Submit' className='ContactForm' />
      </form>
    </div>
  );
};

export default ContactForm;
