import { dataProducts } from "../../ProductsData";
import {
  CHI_TIET_SAN_PHAM,
  THAY_DOI_SO_LUONG,
  THEM_SAN_PHAM,
} from "../constants/constants";

let intialState = {
  data: dataProducts,
  details: dataProducts[0],
  cart: [],
};

export const productReducer = (
  state = intialState,
  { type, payload, idProduct, value }
) => {
  switch (type) {
    case CHI_TIET_SAN_PHAM: {
      state.details = payload;
      return { ...state };
    }

    case THEM_SAN_PHAM: {
      let newCart = [...state.cart];

      let indexProduct = state.cart.findIndex((index) => {
        return index.id === payload.id;
      });

      if (indexProduct === -1) {
        let productCart = { ...payload, quantityProduct: 1 };

        newCart.push(productCart);
      } else {
        newCart[indexProduct].quantityProduct++;
      }

      state.cart = newCart;
      return { ...state };
    }
    case THAY_DOI_SO_LUONG: {
      let cartCopy = [...state.cart];

      let indexProduct = state.cart.findIndex((index) => {
        return index.id === idProduct;
      });

      if (indexProduct !== -1) {
        cartCopy[indexProduct].quantityProduct += value;

        cartCopy[indexProduct].quantityProduct === 0 &&
          cartCopy.splice(indexProduct, 1);
      }
      state.cart = cartCopy;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
