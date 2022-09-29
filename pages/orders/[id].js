import OrderItems from '../../components/Page/Orders/OrderItems';
import { useGetUserOrders } from '../../lib/query/Order';
import { useSession } from 'next-auth/react';
import PrivateRoute from '../../components/Common/PrivateRoute';
import { useRouter } from 'next/router';

const OrderPage = () => {
  const { data: user } = useSession();
  const router = useRouter();

  const { data } = useGetUserOrders(user && user.id);
  console.log('dataaaa', data);
  const order =
    data &&
    data.find((item) => item._id.toString() === router.query.id.toString());

  return (
    <div>
      <OrderItems order={order} />
    </div>
  );
};

export default PrivateRoute(OrderPage);
