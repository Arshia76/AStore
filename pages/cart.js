import CartItems from '../components/Page/Cart/CartItems';
import CartSummary from '../components/Page/Cart/CartSummary';
import PrivateRoute from '../components/Common/PrivateRoute';
import styles from '../styles/page/Cart.module.css';
import Layout from '../components/Common/Layout';

const CartPage = () => {
  return (
    <Layout>
      <div className={styles.Cart}>
        <CartItems />
        <CartSummary />
      </div>
    </Layout>
  );
};

export default PrivateRoute(CartPage);
