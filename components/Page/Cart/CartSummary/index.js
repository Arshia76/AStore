import Input from '../../../Shared/Input';
import Button from '../../../Shared/Button';
import styles from './CartSummary.module.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Resource from '../../../../public/Resource';

const CartSummary = () => {
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemsPrice =
    cartItems?.length &&
    cartItems?.reduce((total, item) => {
      console.log(item.price);
      console.log(item.count);
      return total + item.price * (item.count || 1);
    }, 0);

  const itemCount =
    cartItems?.length &&
    cartItems.reduce((total, item) => {
      return total + (item.count || 1);
    }, 0);

  const payable =
    cartItems?.length &&
    cartItems.reduce((total, item) => {
      return total + item.price * (item.count || 1);
    }, 0);

  return (
    <div className={styles.CartSummary}>
      <h5>Summary</h5>
      <div className={styles.SummaryOptions}>
        <div className={styles.Items}>
          <span style={{ marginRight: '20px' }}>Items</span>
          <span>{itemCount}</span>
          <span>${itemsPrice?.toFixed(2)}</span>
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
        <span>${payable?.toFixed(2)}</span>
      </div>
      <Button
        className='Checkout'
        title='Checkout'
        onClick={() => router.push(Resource.Routes.CHECKOUT)}
      />
    </div>
  );
};

export default CartSummary;
