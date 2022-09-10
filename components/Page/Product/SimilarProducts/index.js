import styles from './SimilarProducts.module.css';
import Product from '../../../Common/Product';
import { useRouter } from 'next/router';
import Resource from '../../../../public/Resource';

const SimilarProducts = (props) => {
  const router = useRouter();
  const handleDetail = (id) => {
    router.push(`${Resource.Routes.PRODUCTS}/${id}`);
  };
  return (
    <div className={styles.Products}>
      {props.products.slice(0, 4).map((p) => {
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
      })}
    </div>
  );
};

export default SimilarProducts;
