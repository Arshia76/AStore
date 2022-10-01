import Shipping from '../components/Page/Checkout/Shipping';
import Header from '../components/Common/Header';
import Layout from '../components/Common/Layout';
import styles from '../styles/page/Checkout.module.css';
import PrivateRoute from '../components/Common/PrivateRoute';

const CheckoutPage = () => {
  return (
    <Layout>
      <Header
        title='Checkout'
        description='Astore an online eccomerce located in iran created with nextjs'
      />
      <div className={styles.Checkout}>
        <Shipping />
      </div>
    </Layout>
  );
};

export default PrivateRoute(CheckoutPage);
