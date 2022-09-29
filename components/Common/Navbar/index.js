import { useState, useRef, useEffect } from 'react';
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
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { status } = useSession();

  const ref = useRef();

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const itemCount =
    cartItems?.length &&
    cartItems.reduce((total, item) => total + (item.count || 1), 0);

  return (
    <nav className={styles.Navbar}>
      <h1
        style={{ cursor: 'pointer' }}
        onClick={() => router.push(Resource.Routes.HOME)}
      >
        <strong>A</strong>store
      </h1>
      <ul>
        <li>
          <Link href={Resource.Routes.HOME}>Home</Link>
        </li>
        <li>
          <Link href={Resource.Routes.PRODUCTS}>Shop</Link>
        </li>
      </ul>
      <div className={styles.Icons}>
        {status === 'authenticated' ? (
          <div className={styles.DropdownContainer}>
            <AiOutlineUser
              size={23}
              color='grey'
              cursor={'pointer'}
              onClick={() => setShowDropdown(!showDropdown)}
            />
            <div
              ref={ref}
              className={styles.Dropdown}
              style={{ display: `${showDropdown ? 'flex' : 'none'}` }}
            >
              <span onClick={() => router.push(Resource.Routes.ORDERS)}>
                Orders
              </span>
              <span
                onClick={() =>
                  signOut({
                    redirect: false,
                  })
                }
              >
                Signout
              </span>
            </div>
          </div>
        ) : (
          <Button
            className={'SignUp'}
            title='Login | Register'
            img={
              <IoIosLogIn
                size={23}
                style={{ marginRight: '5px', fontWeight: 'normal' }}
              />
            }
            onClick={() => router.push(Resource.Routes.AUTH)}
          />
        )}
        <div className={styles.CartContainer}>
          <span className={styles.CartNumber}>{itemCount || 0}</span>
          <BsCart
            size={23}
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
