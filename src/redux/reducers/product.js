
import twix from '../../assets/img/twix.jpg';
import coke from '../../assets/img/coca-cola.jpg';
import chocolate from '../../assets/img/chocolate.jpg';
import doritos from '../../assets/img/doritos.jpg';
import peanuts from '../../assets/img/peanuts.jpg';
import water from '../../assets/img/water.gif';
import chewing from '../../assets/img/chewing.jpg';
import chips from '../../assets/img/chips.jpg';
const initialState = {
  products: [
    { id: "a01", name: "Twix", price: 1, count: 2, img: twix },
    { id: "a02", name: "Coke", price: 2.4, count: 3, img: coke },
    { id: "a03", name: "Chocolate", price: 1.5, count: 4, img: chocolate },
    { id: "a04", name: "Doritos", price: 1.40, count: 1, img: doritos },
    { id: "b04", name: "Peanuts", price: 1, count: 1, img: peanuts },
    { id: "b01", name: "Water", price: 0.95, count: 2, img: water },
    { id: "b02", name: "Chewing gum", price: 1.25, img: 3, img: chewing },
    { id: "b03", name: "Chips", price: 1.30, count: 4, img: chips }
  ],
  coins: [0.01, 0.02, 0.05, 0.10, 0.20, 0.50, 1, 2],
  money: 10.2,
  basket: [{ id: "a01", name: "Twix", price: 1, count: 2, img: twix }],
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS_TO_CART':
      let newProduct = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        count: 1,
        price: action.payload.price
      };
      const items = [...state.items, newProduct];
      return {
        ...state,
        basket: items,
      };

    case 'EDIT_PRODUCTS_COUNT':
      state.products.forEach((product) => {
        if (product.id === action.payload.id) {
          product.count = action.payload.count;
        }
      })
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default product;
