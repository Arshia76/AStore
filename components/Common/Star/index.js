import { AiFillStar } from 'react-icons/ai';
import styles from './Star.module.css';

const Star = (props) => {
  return (
    <div className={styles.Star}>
      <span>{props.rating}</span>
      <AiFillStar size={28} color='#282828' />
    </div>
  );
};

export default Star;
