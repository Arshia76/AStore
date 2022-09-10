import Image from 'next/image';
import Button from '../../Shared/Button';
import styles from './Product.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../store/features/cartSlice';

const Product = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
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
        {cartItems.find(
          (item) => item.productId.toString() === props.productId.toString()
        ) ? (
          <h6>Added to cart!</h6>
        ) : (
          <Button
            title='Add to cart'
            className={'View'}
            style={{ marginTop: '15px !important' }}
            onClick={() => dispatch(addToCart(props))}
          />
        )}
      </div>
    </div>
  );
};

export default Product;
