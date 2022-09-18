import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Input from '../../Shared/Input';
import Button from '../../Shared/Button';
import styles from './Auth.module.css';
import { useRegister } from '../../../lib/query/Auth';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Resource from '../../../public/Resource';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Login = (props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const onChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const Login = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn('credentials', {
      ...data,
      redirect: false,
    });
    if (res.ok) {
      router.replace(Resource.Routes.HOME);
      toast.success('Logged in successfuly');
      setLoading(false);
    } else {
      toast.error(res.error);
      setLoading(false);
    }
  };

  return (
    <div className={styles.Auth}>
      <h5>Login</h5>
      <Input
        placeholder='username'
        type='text'
        className='Auth'
        containerClassName='Auth'
        name='username'
        value={data.username}
        onChange={onChange}
      />
      <Input
        placeholder='password'
        type='password'
        className='Auth'
        containerClassName='Auth'
        name='password'
        value={data.password}
        onChange={onChange}
      />
      <Button
        title={!loading && 'Login'}
        disabled={loading}
        img={loading && <AiOutlineLoading3Quarters size={23} color='black' />}
        className='Auth'
        onClick={Login}
        isLoader={true}
      />
      <span style={{ cursor: 'pointer' }}>Forgot Password?</span>
      <span>
        Dont have an Account?
        <strong onClick={() => props.setType('Register')}>Register</strong>
      </span>
    </div>
  );
};

const Register = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    username: '',
    phoneNumber: '',
    password: '',
  });

  const onChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const onRegisterSuccess = () => {
    setLoading(false);
    props.setType('Login');
    toast.success('Registered successfuly');
  };

  const onRegisterFail = (error) => {
    setLoading(false);
    error.response.data.error.errors.forEach((err) => toast.error(err));
  };

  const { mutate: Register } = useRegister(onRegisterSuccess, onRegisterFail);

  return (
    <div className={styles.Auth}>
      <h5>Register</h5>
      <Input
        placeholder='username'
        type='text'
        className='Auth'
        containerClassName='Auth'
        name='username'
        value={data.username}
        onChange={onChange}
      />
      <Input
        placeholder='phoneNumber'
        type='number'
        className='Auth'
        containerClassName='Auth'
        name='phoneNumber'
        value={data.phoneNumber}
        onChange={onChange}
      />
      <Input
        placeholder='password'
        type='password'
        className='Auth'
        containerClassName='Auth'
        name='password'
        value={data.password}
        onChange={onChange}
      />
      <Button
        title={!loading && 'Register'}
        disabled={loading}
        img={loading && <AiOutlineLoading3Quarters size={23} color='black' />}
        className='Auth'
        onClick={() => {
          setLoading(true);
          Register(data);
        }}
        isLoader={true}
      />

      <span>
        have an Account?
        <strong onClick={() => props.setType('Login')}>Login</strong>
      </span>
    </div>
  );
};

const Auth = () => {
  const [type, setType] = useState('Login');

  return (
    <div className={styles.AuthContainer}>
      {type === 'Login' ? (
        <Login setType={setType} />
      ) : (
        <Register setType={setType} />
      )}
    </div>
  );
};

export default Auth;
