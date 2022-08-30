import Slider from 'react-slick';
import Button from '../../../Shared/Button';
import styles from './Hero.module.css';
import Image from 'next/image';

const Hero = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data =
    props.products &&
    props.products.slice(0, 5).map((p) => {
      return (
        <div key={p.id} className={styles.Product}>
          <div className={styles.Image}>
            <Image
              layout='fill'
              objectFit='cover'
              src={p.thumbnail}
              alt={p.title}
            />
          </div>
          <div className={styles.Content}>
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <Button title='View' className='Slider' />
          </div>
        </div>
      );
    });

  return <Slider {...settings}>{data}</Slider>;
};

export default Hero;
