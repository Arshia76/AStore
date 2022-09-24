import OrderItem from '../OrderItem';
import styles from './OrderItems.module.css';
import { useSelector } from 'react-redux';

const OrderItems = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className={styles.OrderItems}>
      <div className={styles.OrderHeader}>
        <h4>Orders</h4>
        <span>{cartItems.length} Items</span>
      </div>
      <div className={styles.OrderItemList}>
        {cartItems.map((item) => {
          return (
            <OrderItem
              key={item.id}
              id={item.id}
              img={item.image}
              title={item.title}
              category={item.category}
              price={item.price}
              count={item.count}
            />
          );
        })}
      </div>
      <div className={styles.TotalAmount}>
        <div className={styles.TotalFirst}>
          <div>
            <span className={styles.Title}>Subtotal:</span>
            <span className={styles.Amount}>$149.15</span>
          </div>
          <div>
            <span className={styles.Title}>Shipping:</span>
            <span className={styles.Amount}>$0</span>
          </div>
        </div>
        <div className={styles.TotalSecond}>
          <span className={styles.Title}>Total:</span>
          <span className={styles.Amount}>$149.15</span>
        </div>
      </div>
    </div>
  );
};

export default OrderItems;
