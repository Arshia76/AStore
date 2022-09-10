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
                  productId={p.id}
                  productName={p.title}
                  productImage={p.image}
                  productCategory={p.category}
                  productPrice={p.price}
                />
              );
            })
          : props.products.map((p) => {
              return (
                <Product
                  onClick={handleDetail}
                  productId={p.id}
                  key={p.id}
                  productName={p.title}
                  productImage={p.image}
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
