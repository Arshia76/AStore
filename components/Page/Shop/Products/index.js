import Product from '../../../Common/Product';
import styles from './Products.module.css';
import { useRouter } from 'next/router';
import Resource from '../../../../public/Resource';

const Products = (props) => {
  const router = useRouter();

  const handleDetail = (id) => {
    router.push(`${Resource.Routes.PRODUCTS}/${id}`);
  };

  return (
    <div className={styles.Products}>
      <div className={styles.ProductContiner}>
        {props.categoryFilter.length
          ? props.filteredProducts.map((p) => {
              return (
                <Product
                  onClick={handleDetail}
                  key={p.id}
                  id={p.id}
                  name={p.title}
                  image={p.image}
                  category={p.category}
                  price={p.price}
                />
              );
            })
          : props.products.map((p) => {
              return (
                <Product
                  onClick={handleDetail}
                  id={p.id}
                  key={p.id}
                  title={p.title}
                  image={p.image}
                  category={p.category}
                  price={p.price}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Products;
