
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
    { id: "b02", name: "Chewing gum", price: 1.25, count: 0, img: chewing },
    { id: "b03", name: "Chips", price: 1.30, count: 4, img: chips }
  ],
  basket: [],
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS_TO_CART': {
      let flag = false;
      state.basket.forEach((item) => {
        if (item.id === action.payload.id) {
          item.count += 1;
          action.forceUpdate();
          flag = true;
        }
      })
      if (flag) return state;
      const newProduct = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        count: 1,
        img: action.payload.img
      };
      const basket = [...state.basket, newProduct];
      return {
        ...state,
        basket: basket,
      };
    }
    case 'GET_PRODUCT': {
      return { ...state, basket: [] };
    }
    case 'REMOVE_PRODUCT': {
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
      };
    }
    case 'DECRENENT_COUNT_PRODUCT': {
      state.products.forEach((product) => {
        if (product.id === action.payload) {
          product.count--;
        }
      })
      return state;
    }


    case 'INCRENENT_COUNT_PRODUCT': {
      state.products.forEach((product) => {
        if (product.id === action.payload.id) {
          product.count += action.payload.count;
        }
      })
      return state;
    }


    default:
      return state;
  }
};

export default product;
