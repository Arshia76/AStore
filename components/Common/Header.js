import Head from 'next/head';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <Head>
      <link
        rel='icon'
        href='https://cdn2.iconfinder.com/data/icons/shop-and-delivery/44/trolley-512.png'
      />
      <title>{props.title}</title>
      <meta name='description' content={props.description} />
      <meta property='og:title' content={props.title} />
      <meta property='og:description' content={props.description} />
      <meta name='keywords' content='OnlineStore,Eccomerce,Nextjs' />
      <meta property='og:url' content='https://arshi-store.vercel.app' />
      <meta name='author' content='Arshia Nazarlotfi |  ارشیا نظرلطفی' />
    </Head>
  );
};

Header.defaultProps = {
  title: 'Atore',
  description: 'An eccomerce app created with nextjs',
};

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Header;
