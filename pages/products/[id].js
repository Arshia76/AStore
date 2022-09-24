import { getAllProducts, getSingleProduct } from '../../lib/api/Product';
import SimilarProducts from '../../components/Page/Product/SimilarProducts';
import styles from '../../styles/page/Product.module.css';
import Image from 'next/image';
import Star from '../../components/Common/Star';
import Button from '../../components/Shared/Button';
import Layout from '../../components/Common/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/features/cartSlice';

const ProductPage = (props) => {
  const { product, products } = props;
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className={styles.ProductPage}>
        <div className={styles.Product}>
          <div className={styles.Image}>
            <Image src={product.image} alt={product.title} layout='fill' />
          </div>

          <div className={styles.Content}>
            <h3>{product.title}</h3>
            <h5 className={styles.Price}>${product.price}</h5>
            <h5>{product.category}</h5>

            <Star rating={product.rating.rate} />
            <p>{product.description}</p>
            <div className={styles.Actions}></div>
            <div className={styles.Buttons}>
              <Button title={'Buy Now'} className='View-White' />

              {cartItems.length &&
              cartItems.find(
                (item) => item.id.toString() === product.id.toString()
              ) ? (
                <h4>Added To Cart</h4>
              ) : (
                <Button
                  title='Add To Cart'
                  className='View'
                  onClick={() => dispatch(addToCart(product))}
                />
              )}
            </div>
          </div>
        </div>
        <h6>Similar Products</h6>
        <SimilarProducts products={products} />
      </div>
    </Layout>
  );
};

export default ProductPage;

export async function getStaticProps({ params }) {
  const products = await getAllProducts();
  const product = await getSingleProduct(params.id);
  return {
    props: {
      product,
      products,
    },
  };
}

export async function getStaticPaths() {
  const data = await getAllProducts();
  const paths = data.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}
