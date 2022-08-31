import Image from 'next/image';
import styles from './Service.module.css';

const Service = (props) => {
  return (
    <div className={styles.Service}>
      <Image src={props.img} alt='service' width={60} height={60} />
      <div className={styles.Content}>
        <h5>{props.serviceName}</h5>
        <span>{props.serviceDescription}</span>
      </div>
    </div>
  );
};

export default Service;
