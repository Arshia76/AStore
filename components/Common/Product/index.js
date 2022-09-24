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
      <div className={styles.Image} onClick={() => props.onClick(props.id)}>
        <Image src={props.image} alt={props.title} layout='fill' />
      </div>
      <div className={styles.Content}>
        <h4>{props.category}</h4>
        <h2>{props.title}</h2>
        <div className={styles.Actions}>
          <span>${props.price}</span>
        </div>
        {cartItems?.length &&
        cartItems.find((item) => item.id.toString() === props.id.toString()) ? (
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
