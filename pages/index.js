import dynamic from 'next/dynamic';
import NewArrivals from '../components/Page/Home/NewArrivals';
import Hero from '../components/Page/Home/Hero';
import Service from '../components/Page/Home/Service';
import { getAllProducts } from '../lib/api/Product';
import Resource from '../public/Resource';
import styles from '../styles/page/Home.module.css';
import Layout from '../components/Common/Layout';
import About from '../components/Page/Home/About';
import ContactForm from '../components/Page/Home/Contact/Form';
const Map = dynamic(() => import('../components/Page/Home/Contact/Map'), {
  ssr: false,
});

export default function Home(props) {
  const { products } = props;

  return (
    <Layout>
      <div style={{ overflow: ' hidden' }}>
        <Hero />
        <NewArrivals products={products} />
        <About />
        <div className={styles.Services}>
          <Service
            img={Resource.Svg.SHIPPING}
            serviceName='FREE SHIPPING'
            serviceDescription='On all orders of $ 150'
          />
          <Service
            img={Resource.Svg.SUPPORT}
            serviceName='24/7 SUPPORT'
            serviceDescription='Get help when you need it'
          />
          <Service
            img={Resource.Svg.MONEY_BACK}
            serviceName='100% MONEY BACK'
            serviceDescription='30 day money back guarantee'
          />
        </div>
        <div className={styles.ContactUs} id='Contact'>
          <Map />
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const data = await getAllProducts();
    console.log(data);
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
