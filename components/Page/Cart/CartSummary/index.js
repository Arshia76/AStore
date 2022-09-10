import Input from '../../../Shared/Input';
import Button from '../../../Shared/Button';
import styles from './CartSummary.module.css';
import { useSelector } from 'react-redux';

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemsPrice =
    cartItems.length &&
    cartItems.reduce((total, item) => {
      return total + item.productPrice;
    }, 0);

  const payable =
    cartItems.length &&
    cartItems.reduce((total, item) => {
      return total + item.productPrice;
    }, 0);

  return (
    <div className={styles.CartSummary}>
      <h5>Summary</h5>
      <div className={styles.SummaryOptions}>
        <div className={styles.Items}>
          <span style={{ marginRight: '20px' }}>Items</span>
          <span>{cartItems.length}</span>
          <span>${itemsPrice}</span>
        </div>
        <div className={styles.Shipping}>
          <span>Shipping</span>
          {/* select */}
        </div>
        <div className={styles.Code}>
          <span>Give Code</span>
          <Input className='CartCode' placeholder='Enter your code' />
        </div>
      </div>
      <div className={styles.Subtotal}>
        <span>Total Price</span>
        <span>${payable}</span>
      </div>
      <Button className='Checkout' title='Checkout' />
    </div>
  );
};

export default CartSummary;
