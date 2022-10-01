import CartItems from '../components/Page/Cart/CartItems';
import CartSummary from '../components/Page/Cart/CartSummary';
import styles from '../styles/page/Cart.module.css';
import Layout from '../components/Common/Layout';
import Header from '../components/Common/Header';

const CartPage = () => {
  return (
    <Layout>
      <Header
        title='Cart'
        description='Astore an online eccomerce located in iran created with nextjs'
      />
      <div className={styles.Cart}>
        <CartItems />
        <CartSummary />
      </div>
    </Layout>
  );
};

export default CartPage;
