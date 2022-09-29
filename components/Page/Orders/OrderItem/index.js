import Image from 'next/image';
import styles from './OrderItem.module.css';

const OrderItem = (props) => {
  return (
    <div className={styles.OrderItem}>
      <Image src={props.img} alt={props.title} width={60} height={60} />
      <div className={styles.ProductName}>
        <h5>{props.category}</h5>
        <span>{props.title}</span>
      </div>
      <span>{props.count}</span>
      <span>${props.price}</span>
    </div>
  );
};

export default OrderItem;
