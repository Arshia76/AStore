import Head from 'next/head';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name='description' content={props.description} />
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
