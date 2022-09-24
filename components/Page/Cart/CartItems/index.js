import CartItem from '../CartItem';
import styles from './CartItems.module.css';
import { useSelector } from 'react-redux';

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemCount =
    cartItems?.length &&
    cartItems.reduce((total, item) => total + (item.count || 1), 0);
  return (
    <div className={styles.CartItems}>
      <div className={styles.CartHeader}>
        <h4>Shopping Cart</h4>
        <span>{itemCount} Items</span>
      </div>
      <div className={styles.CartItemList}>
        {cartItems?.length ? (
          cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                img={item.image}
                title={item.title}
                category={item.category}
                price={item.price}
                count={item.count}
              />
            );
          })
        ) : (
          <h5>Your cart is Empty</h5>
        )}
      </div>
    </div>
  );
};

export default CartItems;
