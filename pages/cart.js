import CartItems from '../components/Page/Cart/CartItems';
import CartSummary from '../components/Page/Cart/CartSummary';
import styles from '../styles/page/Cart.module.css';

const CartPage = () => {
  return (
    <div className={styles.Cart}>
      <CartItems />
      <CartSummary />
    </div>
  );
};

export default CartPage;
