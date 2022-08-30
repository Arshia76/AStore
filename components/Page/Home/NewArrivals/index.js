import Product from '../../../Common/Product';
import styles from './NewArrivals.module.css';

const NewArrivals = (props) => {
  return (
    <div className={styles.NewArrivals}>
      <h4>New Arrivals</h4>
      <p>
        Check out our new furniture collection! Cozy sofa, fancy chair, wooden
        casket, and many more. The new collection brings an informal elegance to
        your home.
      </p>
      <div className={styles.Products}>
        {props.products.slice(0, 8).map((p) => {
          return (
            <Product
              key={p.id}
              productName={p.title}
              productImage={p.thumbnail}
              productCategory={p.category}
              productPrice={p.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewArrivals;
