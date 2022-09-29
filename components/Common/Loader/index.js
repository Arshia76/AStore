import Resource from '../../../public/Resource';
import Image from 'next/image';

const Loader = () => {
  return (
    <div
      style={{
        width: '300px',
        height: '200px',
        position: 'relative',
        margin: 'auto',
      }}
    >
      <Image
        src={Resource.Gif.LOADER}
        layout='fill'
        alt='loading...'
        objectFit='cover'
      />
    </div>
  );
};

export default Loader;
