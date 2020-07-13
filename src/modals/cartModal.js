import * as basicLightbox from 'basiclightbox';
import { cart } from '../cart/cart';
import template from '../cart/cartTemplate.hbs';
import { removeFromCart } from '../cart/cart';
import { getTotal } from '../cart/cart';

export const cartModal = () => {
  const markup = template(cart.order);
  // console.log(markup);
  const instance = basicLightbox.create(
    `
    <div class="modal">
    <div class="modal__form-wrapper"><h2 class="modal__form-title">Cart</h2>
    ${
      cart.order.length > 0
        ? `<ul class="orderList">${markup}</ul>`
        : `<p>Cart is empty</p>`
    }
    <hr>
    <div class="cart-order-total">
    <span class ="allProducts"><b>All products in cart: </b>${
      cart.totalQuantity
    }</span>
    <span class = "summary"><b>Summary: </b>${cart.totalSum}</span>
    </div>
    ${
      cart.order.length > 0
        ? "<button class='orderButton'>Confirm Order</button>"
        : ''
    }
    <button class="modalBtn">close</button>
    </div>
    </div>
    `,
    {
      onShow: instance => {
        instance.element().querySelector('.modalBtn').onclick = instance.close;
      },
    },
  );

  instance.show();
  const removeDish = e => {
    if (
      e.target.nodeName === 'BUTTON' &&
      e.target.classList.contains('remove')
    ) {
      removeFromCart(e.target.dataset.id);
      document.querySelector('.orderList').innerHTML = template(cart.order);
      getTotal();
      document.querySelector(
        '.summary',
      ).innerHTML = `<b>Summary: </b>${cart.totalSum}`;
      document.querySelector(
        '.allProducts',
      ).innerHTML = `<b>All products in cart: </b>${cart.totalQuantity}`;
    }
    console.log(cart);
  };
  document.querySelector('.orderList').addEventListener('click', removeDish);
};
