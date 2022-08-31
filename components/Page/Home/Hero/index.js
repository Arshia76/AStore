import Slider from 'react-slick';
import Button from '../../../Shared/Button';
import styles from './Hero.module.css';
import Image from 'next/image';
import Resource from '../../../../public/Resource';

const Hero = (props) => {
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
            src={Resource.Images.CAMERA}
            alt={'camera'}
          />
        </div>
        <div className={styles.Content}>
          <h2>CAMERA</h2>
          <p>Get the exclusive list of cameras</p>
          <Button title='View' className='Slider' />
        </div>
      </div>
      <div className={styles.Product}>
        <div className={styles.Image}>
          <Image
            layout='fill'
            objectFit='cover'
            src={Resource.Images.PHONE}
            alt={'phone'}
          />
        </div>
        <div className={styles.Content}>
          <h2>Phone</h2>
          <p>Get the best phones around the world with best quality</p>
          <Button title='View' className='Slider' />
        </div>
      </div>
      <div className={styles.Product}>
        <div className={styles.Image}>
          <Image
            layout='fill'
            objectFit='cover'
            src={Resource.Images.LAPTOP}
            alt={'Laptop'}
          />
        </div>
        <div className={styles.Content}>
          <h2>Laptop</h2>
          <p>
            Looking for laptop? Dont worry we ve got the best offers for you
          </p>
          <Button title='View' className='Slider' />
        </div>
      </div>
    </Slider>
  );
};

export default Hero;
