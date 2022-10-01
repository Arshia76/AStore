import Table from '../../components/Shared/Table';
import { useGetUserOrders } from '../../lib/query/Order';
import { useSession } from 'next-auth/react';
import Layout from '../../components/Common/Layout';
import styles from '../../styles/page/Orders.module.css';
import Button from '../../components/Shared/Button';
import { useRouter } from 'next/router';
import Resource from '../../public/Resource';
import PrivateRoute from '../../components/Common/PrivateRoute';
import Loader from '../../components/Common/Loader';
import Header from '../../components/Common/Header';

const OrdersPage = () => {
  const { data: user } = useSession();
  const router = useRouter();

  const { data, isLoading } = useGetUserOrders(user && user.id);

  const headers = {
    id: 'id',
    date: 'date',
    price: 'price',
    actions: 'actions',
  };

  const tableData =
    data &&
    data.map((item) => {
      return {
        id: item._id,
        date: new Date(item.createdAt).toISOString().split('T')[0],
        price:
          '$' +
          item.orders
            .reduce((total, i) => total + parseFloat(i.productPrice), 0)
            .toFixed(2),
        actions: (
          <Button
            className={'OrderDetail'}
            title='Detail'
            onClick={() =>
              router.push(`${Resource.Routes.ORDERS}/${item._id.toString()}`)
            }
          />
        ),
      };
    });

  return (
    <Layout>
      <Header
        title='Orders'
        description='Astore an online eccomerce located in iran created with nextjs'
      />
      <div className={styles.Orders}>
        <h4>Orders</h4>
        {isLoading ? (
          <Loader />
        ) : (
          <Table className='UserOrders' headers={headers} data={tableData} />
        )}
      </div>
    </Layout>
  );
};

export default PrivateRoute(OrdersPage);
