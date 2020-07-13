import dishesTemplate from '../templates/menuItems.hbs';
import dishes from '../menu.json';
import { addToCart } from '../cart/cart';

const menuList = {
  dishes,
};

const refs = {
  menRef: document.querySelector('.menu'),
};

const addToOrder = e => {
  if (e.target.nodeName === 'BUTTON' && e.target.dataset.btn === 'cartBtn') {
    const id = e.target.closest('[data-id]').dataset.id;
    const dish = menuList.dishes.find(dish => dish.id === id);
    addToCart(dish);
  } else return;
};

const markup = dishesTemplate(dishes);

refs.menRef.insertAdjacentHTML('afterbegin', markup);

refs.menRef.addEventListener('click', addToOrder);
