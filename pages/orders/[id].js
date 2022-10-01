import OrderItems from '../../components/Page/Orders/OrderItems';
import { useGetOrder } from '../../lib/query/Order';
import PrivateRoute from '../../components/Common/PrivateRoute';
import { useRouter } from 'next/router';
import Header from '../../components/Common/Header';

const OrderPage = () => {
  const router = useRouter();

  const { data } = useGetOrder(router.query.id.toString());
  console.log('dataaaa', data);

  return (
    <div>
      <Header
        title={data._id}
        description='Astore an online eccomerce located in iran created with nextjs'
      />
      <OrderItems order={order} />
    </div>
  );
};

export default PrivateRoute(OrderPage);
