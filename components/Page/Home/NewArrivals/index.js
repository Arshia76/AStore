import Product from '../../../Common/Product';
import Button from '../../../Shared/Button';
import styles from './NewArrivals.module.css';
import { useRouter } from 'next/router';
import Resource from '../../../../public/Resource';

const NewArrivals = (props) => {
  const router = useRouter();
  const handleClick = (id) => router.push(`${Resource.Routes.PRODUCTS}/${id}`);
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
              onClick={handleClick}
              key={p.id}
              id={p.id}
              title={p.title}
              image={p.image}
              category={p.category}
              price={p.price}
            />
          );
        })}
      </div>
      <Button
        className='View'
        title='View More'
        onClick={() => router.push(Resource.Routes.PRODUCTS)}
      />
    </div>
  );
};

export default NewArrivals;
