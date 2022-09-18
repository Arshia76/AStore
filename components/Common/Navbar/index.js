import styles from './Navbar.module.css';
import Link from 'next/link';
import { BsCart } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { useRouter } from 'next/router';
import Resource from '../../../public/Resource';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import Button from '../../Shared/Button';
import { IoIosLogIn } from 'react-icons/io';
import { signOut } from 'next-auth/react';

const Navbar = () => {
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { status } = useSession();
  return (
    <nav className={styles.Navbar}>
      <h1 style={{ cursor: 'pointer' }}>
        <strong>A</strong>store
      </h1>
      <ul>
        <li>
          <Link href={Resource.Routes.HOME}>Home</Link>
        </li>
        <li>
          <Link href={Resource.Routes.PRODUCTS}>Shop</Link>
        </li>
        <li>
          <Link href={'/'}>Blog</Link>
        </li>
        <li>
          <Link href={'/'}>About Us</Link>
        </li>
        <li>
          <Link href={'/'}>Contact Us</Link>
        </li>
      </ul>
      <div className={styles.Icons}>
        {status === 'authenticated' ? (
          <AiOutlineUser
            size={20}
            color='grey'
            cursor={'pointer'}
            onClick={() =>
              signOut({
                redirect: false,
              })
            }
          />
        ) : (
          <Button
            className={'SignUp'}
            title='Login | Register'
            img={
              <IoIosLogIn
                size={20}
                style={{ marginRight: '5px', fontWeight: 'normal' }}
              />
            }
            onClick={() => router.push(Resource.Routes.AUTH)}
          />
        )}
        <div className={styles.CartContainer}>
          <span className={styles.CartNumber}>{cartItems.length}</span>
          <BsCart
            size={20}
            color='grey'
            cursor={'pointer'}
            onClick={() => router.push(Resource.Routes.CART)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
