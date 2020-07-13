import './css/styles.css';
import { switchFn } from './components/switcher';
import './components/switcher';
import './cart/cart';
import 'basiclightbox/dist/basicLightbox.min.css';
import './menu/menu';

export const bodyRef = document.querySelector('body');
export const switchRef = document.querySelector('.js-switch-input');

bodyRef.classList.add('light-theme');

switchRef.addEventListener('change', switchFn);
