import styles from './About.module.css';
import Image from 'next/image';
import Resource from '../../../../public/Resource';

const About = () => {
  return (
    <div className={styles.About}>
      <div className={styles.Image}>
        <Image
          src={Resource.Images.ABOUT}
          layout='fill'
          alt='About AStore img'
          objectFit='cover'
        />
      </div>
      <div className={styles.Content}>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi magni
          voluptates adipisci voluptatibus autem accusantium quis! Laborum
          nobis, debitis esse, non voluptatum soluta iure et vel sint deserunt,
          perspiciatis possimus quis! Ipsum dignissimos eum cumque fuga animi
          corrupti! Expedita consequatur delectus numquam ea, provident fugiat
          earum officiis tenetur culpa repellat.
        </p>
      </div>
    </div>
  );
};

export default About;
