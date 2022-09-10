import styles from './Navbar.module.css';
import Link from 'next/link';
import { BsCart } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import Resource from '../../../public/Resource';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <h1>
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
        <AiOutlineUser size={20} color='grey' cursor={'pointer'} />
        <div className={styles.CartContainer}>
          <span className={styles.CartNumber}>35</span>
          <BsCart size={20} color='grey' cursor={'pointer'} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
