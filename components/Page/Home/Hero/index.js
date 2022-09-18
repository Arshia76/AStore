import Slider from 'react-slick';
import Button from '../../../Shared/Button';
import styles from './Hero.module.css';
import Image from 'next/image';
import Resource from '../../../../public/Resource';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className={styles.Product}>
        <div className={styles.Image}>
          <Image
            layout='fill'
            objectFit='cover'
            src={Resource.Images.WOMEN}
            alt={'WOMEN-CLOTHES'}
          />
        </div>
        <div className={styles.Content}>
          <h2>WOMEN CLOTHES</h2>
          <p>Get the exclusive list of WOMEN Clothes</p>
          <Button title='View' className='View' />
        </div>
      </div>
      <div className={styles.Product}>
        <div className={styles.Image}>
          <Image
            layout='fill'
            objectFit='cover'
            src={Resource.Images.MEN}
            alt={'MEN_CLOTHES'}
          />
        </div>
        <div className={styles.Content}>
          <h2>MEN CLOTHES</h2>
          <p>Get the best T-Shirts around the world with best quality</p>
          <Button title='View' className='View' />
        </div>
      </div>
      <div className={styles.Product}>
        <div className={styles.Image}>
          <Image
            layout='fill'
            objectFit='fill'
            src={Resource.Images.JEWELERY1}
            alt={'JEWELERY'}
          />
        </div>
        <div className={styles.Content}>
          <h2>JEWELERY</h2>
          <p>
            Looking for Jewelery? Dont worry we ve got the best offers for you
          </p>
          <Button title='View' className='View' />
        </div>
      </div>
    </Slider>
  );
};

export default Hero;
