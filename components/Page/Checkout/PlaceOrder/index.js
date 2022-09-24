import styles from './PlaceOrder.module.css';
import OrderItems from '../OrderItems';
import PaymentCard from '../PaymentCard';

const PlaceOrder = () => {
  return (
    <div className={styles.PlaceOrder}>
      <OrderItems />
      <PaymentCard />
    </div>
  );
};

export default PlaceOrder;
