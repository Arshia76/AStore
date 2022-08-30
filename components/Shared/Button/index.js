import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './Button.module.css';

const Button = (props) => {
  const classes = [styles.Button];
  if (props.className) classes.push(styles[props.className]);
  return (
    <button
      className={classes.join(' ')}
      id={props.id}
      onClick={props.onClick}
      disabled={props.disabled}
      style={props.style}
    >
      {props.img && (
        <Image
          src={props.img}
          alt={props.alt}
          width={props.imgWidth}
          height={props.imgHeight}
          objectFit='contain'
        />
      )}
      {props.title}
    </button>
  );
};

Button.defaultProps = {
  img: null,
  id: null,
  className: null,
  alt: null,
  imgWidth: null,
  imgHeight: null,
  style: {},
  onClick: null,
  title: null,
  disabled: false,
};

Button.propTypes = {
  icon: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
  style: PropTypes.object,
  onClick: PropTypes.func,
  title: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
