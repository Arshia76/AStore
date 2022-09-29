import OrderItem from '../OrderItem';
import styles from './OrderItems.module.css';

const OrderItems = (props) => {
  const { order } = props;

  return (
    <div className={styles.OrderItems}>
      <div className={styles.OrderHeader}>
        <h4>Orders</h4>
        <span>{order && order.orders.length} Items</span>
      </div>
      <div className={styles.OrderItemList}>
        {order &&
          order.orders.map((item) => {
            return (
              <OrderItem
                key={item.productId}
                id={item.productId}
                img={item.productImage}
                title={item.productName}
                category={item.productCategory}
                price={item.productPrice}
                count={item.productCount}
              />
            );
          })}
      </div>
      <div className={styles.TotalAmount}>
        <div className={styles.TotalFirst}>
          <div>
            <span className={styles.Title}>Subtotal:</span>
            <span className={styles.Amount}>
              {order &&
                order.orders
                  .reduce(
                    (total, item) =>
                      total +
                      parseInt(item.productCount) *
                        parseFloat(item.productPrice),
                    0
                  )
                  .toFixed(2)}
            </span>
          </div>
          <div>
            <span className={styles.Title}>Shipping:</span>
            <span className={styles.Amount}>$0</span>
          </div>
        </div>
        <div className={styles.TotalSecond}>
          <span className={styles.Title}>Total:</span>
          <span className={styles.Amount}>
            {order &&
              order.orders
                .reduce(
                  (total, item) =>
                    total +
                    parseInt(item.productCount) * parseFloat(item.productPrice),
                  0
                )
                .toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderItems;
