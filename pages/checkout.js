import Shipping from '../components/Page/Checkout/Shipping';
import PlaceOrder from '../components/Page/Checkout/PlaceOrder';
import Layout from '../components/Common/Layout';
import styles from '../styles/page/Checkout.module.css';
import PrivateRoute from '../components/Common/PrivateRoute';

const CheckoutPage = () => {
  return (
    <Layout>
      <div className={styles.Checkout}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* <PlaceOrder /> */}
        <Shipping />
      </div>
    </Layout>
  );
};

export default PrivateRoute(CheckoutPage);
