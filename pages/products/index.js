import { useState, useEffect } from 'react';
import Filter from '../../components/Page/Shop/Filter';
import Products from '../../components/Page/Shop/Products';
import { getAllProducts, getCategories } from '../../lib/api/Product';
import styles from '../../styles/page/Shop.module.css';
import Layout from '../../components/Common/Layout';
import Header from '../../components/Common/Header';

const ProductsPage = (props) => {
  const { products } = props;

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);

  useEffect(() => {
    if (categoryFilter && categoryFilter.length) {
      setFilteredProducts(() =>
        products.filter((p) => categoryFilter.includes(p.category))
      );
    }
  }, [categoryFilter, products]);

  console.log(filteredProducts);
  console.log(categoryFilter);

  return (
    <Layout>
      <Header
        title='Products'
        description='arshi-store an online eccomerce located in iran created with nextjs'
      />
      <div className={styles.Shop}>
        <Filter
          categories={props.categories}
          setCategoryFilter={setCategoryFilter}
        />
        <Products
          products={products}
          filteredProducts={filteredProducts}
          categoryFilter={categoryFilter}
        />
      </div>
    </Layout>
  );
};

export default ProductsPage;

export async function getStaticProps() {
  try {
    const data = await getCategories();
    const products = await getAllProducts();
    return {
      props: {
        categories: data,
        products: products,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        notFound: true,
      },
    };
  }
}
