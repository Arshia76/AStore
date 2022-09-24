import styles from './PaymentCard.module.css';
import { FaPaypal } from 'react-icons/fa';
import { BsCreditCardFill } from 'react-icons/bs';
import Input from '../../../Shared/Input';
import Button from '../../../Shared/Button';

const PaymentCard = () => {
  return (
    <div className={styles.PaymentCard}>
      <h2>Payment Info</h2>
      <span style={{ margin: '15px 0' }}>Payment Method</span>
      <div className={[styles.Group, styles.flex_row].join(' ')}>
        <div className={styles.PayOption}>
          <BsCreditCardFill
            size={25}
            color='white'
            style={{ marginRight: '7px' }}
          />
          <span>Credit Card</span>
        </div>
        <div className={styles.PayOption}>
          <FaPaypal size={25} color='white' style={{ marginRight: '2px' }} />
          <span>PayPal</span>
        </div>
      </div>
      <div className={styles.Group}>
        <span>Name on card</span>
        <Input
          className='CreditCard'
          name='cardOwner'
          //   onChange={onChange}
          placeholder='Name on card'
        />
      </div>
      <div className={styles.Group}>
        <span>Card Number</span>
        <Input
          className='CreditCard'
          name='cardNumber'
          //   onChange={onChange}
          placeholder='XXXX XXXX XXXX XXXX'
        />
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      <Button className={'Pay'} title='Pay' />
    </div>
  );
};

export default PaymentCard;
