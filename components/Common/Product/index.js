import Image from 'next/image';
import styles from './Product.module.css';

const Product = (props) => {
  return (
    <div className={styles.Product}>
      <div className={styles.Image}>
        <Image src={props.productImage} alt={props.productName} layout='fill' />
      </div>
      <div className={styles.Content}>
        <h4>{props.productCategory}</h4>
        <h2>{props.productName}</h2>
        <span>${props.productPrice}</span>
      </div>
    </div>
  );
};

export default Product;
