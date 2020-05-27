import utils from '../helpers/utils.js'
import cartData from '../helpers/data/cartData.js'

const addToCart = (newBook) => {
  cartData.setCart(newBook);
  cartToDom();
};

const cartToDom = () => {
  const myCart = cartData.getCart();
  let domString = '';
  for (let cartItem of myCart) {
    domString += `<h3>${cartItem.title}</h3>`;
  }
  utils.printToDom('#cart', domString);
}

export default { addToCart };
