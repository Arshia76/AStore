import Product from '../../../Common/Product';
import styles from './Products.module.css';

const Products = (props) => {
  return (
    <div className={styles.Products}>
      <div className={styles.Header}>header</div>
      <div className={styles.ProductContiner}>
        {props.categoryFilter.length
          ? props.filteredProducts.map((p) => {
              return (
                <Product
                  key={p.id}
                  productName={p.title}
                  productImage={p.thumbnail}
                  productCategory={p.category}
                  productPrice={p.price}
                />
              );
            })
          : props.products.map((p) => {
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

export default Products;
