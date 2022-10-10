import * as yup from 'yup';

const EmailRegex =
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";

export const ContactSchema = yup.object({
  fullName: yup.string().required('Please Enter Your fullname'),
  email: yup
    .string()
    .matches(EmailRegex, 'Please Provide a Valid Email')
    .required('Please Enter Your email'),
  title: yup.string().required('Please Enter Title of Message'),
  message: yup.string().required('Please Enter Message'),
});
