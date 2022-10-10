import Image from 'next/image';
import Resource from '../public/Resource';
import Layout from '../components/Common/Layout';

const PageNotFound = () => {
  return (
    <Layout>
      <div
        style={{
          position: 'relative',
          height: 'calc(100vh - 54px)',
          width: 'auto',
          margin: 'auto',
        }}
      >
        <Image
          src={Resource.Images.NOTFOUND}
          alt='404 no-found'
          layout='fill'
          objectFit='cover'
        />
      </div>
    </Layout>
  );
};

export default PageNotFound;
