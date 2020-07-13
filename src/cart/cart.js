import { cartModal } from '../modals/cartModal';

const refs = {
  cartBtn: document.querySelector('.cart'),
};

export const cart = {
  order: [],
  totalSum: 0,
  totalQuantity: 0,
};

export const addToCart = dish => {
  const result = cart.order.find(item => item.name === dish.name);
  if (!result) {
    cart.order = [
      ...cart.order,
      {
        id: dish.id,
        name: dish.name,
        price: dish.price,
        quantity: 1,
      },
    ];
  } else {
    cart.order = cart.order.map(item => {
      if (item.name === dish.name) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
  }
  getTotal();
};

export const removeFromCart = id => {
  cart.order = cart.order.filter(dish => dish.id !== id);
  // getTotal();
};

export const getTotal = () => {
  cart.totalSum = cart.order.reduce((acc, dish) => {
    acc += dish.price * dish.quantity;
    return acc;
  }, 0);
  cart.totalQuantity = cart.order.reduce((acc, dish) => {
    acc += dish.quantity;
    return acc;
  }, 0);
};

refs.cartBtn.addEventListener('click', cartModal);