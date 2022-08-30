import styles from './Navbar.module.css';
import Link from 'next/link';
import { BsCart } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <h1>
        <strong>A</strong>store
      </h1>
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/'}>Shop</Link>
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
        <div>
          <BsCart size={20} color='grey' cursor={'pointer'} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
