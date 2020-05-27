import utils from '../helpers/utils.js'

const cartToDom = () => {
  const domString = `
    <h3>This is the Cart</h3>
  `;
  utils.printToDom('#cart', domString);
}

export default { cartToDom };
