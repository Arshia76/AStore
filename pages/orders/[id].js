import OrderItems from '../../components/Page/Orders/OrderItems';
import { useGetOrder } from '../../lib/query/Order';
import PrivateRoute from '../../components/Common/PrivateRoute';
import { useRouter } from 'next/router';
import Header from '../../components/Common/Header';
import Layout from '../../components/Common/Layout';

const OrderPage = () => {
  const router = useRouter();

  const { data } = useGetOrder(router.query.id.toString());
  console.log('dataaaa', data);

  return (
    <Layout>
      <Header
        title={data && data.productId}
        description='arshi-store an online eccomerce located in iran created with nextjs'
      />
      <OrderItems order={data} />
    </Layout>
  );
};

export default PrivateRoute(OrderPage);
