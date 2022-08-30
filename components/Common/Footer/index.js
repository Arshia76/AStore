import { useState } from 'react';
import styles from './Footer.module.css';
import { AiOutlineGoogle, AiOutlineTwitter } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';
import { FaFacebookF } from 'react-icons/fa';
import Link from 'next/link';
import Input from '../../Shared/Input';
import Button from '../../Shared/Button';

const Footer = () => {
  const [email, setEmail] = useState('');

  const onChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <footer className={styles.Footer}>
      <div className={styles.Container}>
        <div className={styles.Top}>
          <div className={styles.TopContent}>
            <h2>Many Desktop Publishing</h2>
            <p>
              Do you want to receive exclusive email offers? Subscribe to our
              newsletter! You will receive a unique promo code which gives you a
              20% discount on all our products in 10 minutes.
            </p>
          </div>
          <div className={styles.Input}>
            <Input
              type={'text'}
              placeholder='Enter your Email'
              className='NewsTeller'
              containerClassName='NewsTeller'
              value={email}
              onChange={onChange}
            />
            <Button title={'Subscribe'} className='Subscribe' />
          </div>
        </div>
        <hr className={styles.Line} />
        <div className={styles.Middle}>
          <div className={styles.Services}>
            <h2>
              <strong
                style={{ color: 'red', fontSize: '20px', fontWeight: '500' }}
              >
                A
              </strong>
              store
            </h2>
            <p>
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s,
            </p>
            <div className={styles.Icons}>
              <AiOutlineGoogle
                size={25}
                cursor='pointer'
                color='#fff'
                className={styles.Icon}
              />
              <AiOutlineTwitter
                size={25}
                cursor='pointer'
                color='#fff'
                className={styles.Icon}
              />
              <ImLinkedin2
                size={25}
                cursor='pointer'
                color='#fff'
                className={styles.Icon}
              />
              <FaFacebookF
                size={25}
                cursor='pointer'
                color='#fff'
                className={styles.Icon}
              />
            </div>
          </div>
          <div className={styles.Services}>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href={'/'}>What Do We Do</Link>
              </li>
              <li>
                <Link href={'/'}>Available Services</Link>
              </li>
              <li>
                <Link href={'/'}>Latest Posts</Link>
              </li>
              <li>
                <Link href={'/'}>FAQs</Link>
              </li>
            </ul>
          </div>
          <div className={styles.Services}>
            <h4>My Account</h4>
            <ul>
              <li>
                <Link href={'/'}>Sign In</Link>
              </li>
              <li>
                <Link href={'/'}>View Cart</Link>
              </li>
              <li>
                <Link href={'/'}>Order Tracking</Link>
              </li>
              <li>
                <Link href={'/'}>Help & Support</Link>
              </li>
            </ul>
          </div>
          <div className={styles.Services}>
            <h4>Customer Service</h4>
            <ul>
              <li>
                <Link href={'/'}>Help & ContactUs</Link>
              </li>
              <li>
                <Link href={'/'}>Return & Refunds</Link>
              </li>
              <li>
                <Link href={'/'}>Online Stores</Link>
              </li>
              <li>
                <Link href={'/'}>Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className={styles.Line} />
        <div className={styles.Bottom}>
          <h3>
            Powered By <strong>Arshia Nazarlotfi</strong>
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
