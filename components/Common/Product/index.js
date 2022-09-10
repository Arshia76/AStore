import Image from 'next/image';
import Button from '../../Shared/Button';
import styles from './Product.module.css';

const Product = (props) => {
  return (
    <div className={styles.Product}>
      <div
        className={styles.Image}
        onClick={() => props.onClick(props.productId)}
      >
        <Image src={props.productImage} alt={props.productName} layout='fill' />
      </div>
      <div className={styles.Content}>
        <h4>{props.productCategory}</h4>
        <h2>{props.productName}</h2>
        <div className={styles.Actions}>
          <span>${props.productPrice}</span>
        </div>
        <Button
          title='Add to cart'
          className={'View'}
          style={{ marginTop: '15px !important' }}
        />
      </div>
    </div>
  );
};

export default Product;
