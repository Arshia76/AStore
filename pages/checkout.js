import Shipping from '../components/Page/Checkout/Shipping';

import Layout from '../components/Common/Layout';
import styles from '../styles/page/Checkout.module.css';
import PrivateRoute from '../components/Common/PrivateRoute';

const CheckoutPage = () => {
  return (
    <Layout>
      <div className={styles.Checkout}>
        <Shipping />
      </div>
    </Layout>
  );
};

export default PrivateRoute(CheckoutPage);
