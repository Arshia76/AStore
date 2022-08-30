import NewArrivals from '../components/Page/Home/NewArrivals';
import Hero from '../components/Page/Home/Hero';
import { getAllProducts } from '../lib/api/Product';

export default function Home(props) {
  const { products } = props.products;
  return (
    <div>
      <Hero products={products} />
      <NewArrivals products={products} />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const data = await getAllProducts();
    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}
