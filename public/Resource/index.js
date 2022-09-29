import CAMERA from './Images/camera.jpg';
import LAPTOP from './Images/laptop.jpg';
import PHONE from './Images/phone.jpg';
import BAG from './Images/bag.jpg';
import ELECTRONICS from './Images/electronics.png';
import MEN_CLOTHING from './Images/men-clothing.png';
import WOMEN_CLOTHING from './Images/women-clothing.png';
import JEWELERY from './Images/jewelery.png';
import WOMEN from './Images/women.jpg';
import MEN from './Images/men.jpg';
import JEWELERY1 from './Images/jewelery.jpg';
import ABOUT from './Images/about.jpg';
import MARKER from './Images/marker-icon.png';

import SHIPPING from './Svg/shipping.svg';
import MONEY_BACK from './Svg/money_back.svg';
import SUPPORT from './Svg/support.svg';

class Resource {
  static Images = {
    CAMERA,
    LAPTOP,
    PHONE,
    BAG,
    MEN_CLOTHING,
    WOMEN_CLOTHING,
    JEWELERY,
    ELECTRONICS,
    WOMEN,
    MEN,
    JEWELERY1,
    ABOUT,
    MARKER,
  };

  static Svg = {
    SHIPPING,
    MONEY_BACK,
    SUPPORT,
  };

  static Routes = {
    HOME: '/',
    PRODUCTS: '/products',
    CART: '/cart',
    AUTH: '/auth',
    CHECKOUT: '/checkout',
    ORDERS: '/orders',
  };
}

export default Resource;
