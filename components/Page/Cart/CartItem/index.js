import { useState } from 'react';
import Image from 'next/image';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';
import styles from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import {
  changeCount,
  removeFromCart,
} from '../../../../store/features/cartSlice';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(props.count || 1);
  return (
    <div className={styles.CartItem}>
      <Image src={props.img} alt={props.title} width={60} height={60} />
      <div className={styles.ProductName}>
        <h5>{props.category}</h5>
        <span>{props.title}</span>
      </div>
      <div className={styles.Count}>
        <span
          onClick={() => {
            if (count > 1) {
              setCount((count) => --count);
              dispatch(changeCount({ id: props.id, count: count - 1 }));
            }
          }}
        >
          <AiOutlineMinus size={20} color='#ddd' />
        </span>
        <span>{count}</span>
        <span
          onClick={() => {
            setCount((count) => ++count);
            dispatch(changeCount({ id: props.id, count: count + 1 }));
          }}
        >
          <AiOutlinePlus size={20} color='#ddd' />
        </span>
      </div>
      <span>${props.price}</span>
      <TiDelete
        size={30}
        color='#ddd'
        cursor={'pointer'}
        onClick={() => dispatch(removeFromCart(props.id))}
      />
    </div>
  );
};

export default CartItem;
