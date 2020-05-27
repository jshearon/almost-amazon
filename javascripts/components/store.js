import bookData from '../helpers/data/bookData.js';
import utils from '../helpers/utils.js'
import cart from './cart.js'

const addToCartEvent = (e) => {
  e.preventDefault();

  cart.cartToDom();
}

const makeStore = () => {
  const bookInfo = bookData.getBook();

  const domString = `
    <h2>Our One Book</h2>
    Buy Now! It's only 
    <h3 id="book-price">$${bookInfo.price}</h3>
    <button class="btn btn-danger" id="add-to-cart">Add To Cart</button>
  `;
   
  utils.printToDom('#store', domString);

  document.querySelector("#add-to-cart").addEventListener("click", addToCartEvent);
}

export default { makeStore }
