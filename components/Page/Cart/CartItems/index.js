import CartItem from '../CartItem';
import styles from './CartItems.module.css';
import { useSelector } from 'react-redux';

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className={styles.CartItems}>
      <div className={styles.CartHeader}>
        <h4>Shopping Cart</h4>
        <span>{cartItems.length} Items</span>
      </div>
      <div className={styles.CartItemList}>
        {cartItems.length ? (
          cartItems.map((item) => {
            return (
              <CartItem
                key={item.productId}
                id={item.productId}
                img={item.productImage}
                title={item.productName}
                category={item.productCategory}
                price={item.productPrice}
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
