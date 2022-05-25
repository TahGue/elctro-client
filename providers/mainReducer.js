import {
  ADD_TO_CART,
  ADD_TO_FAVORITE,
  CHANGE_CART,
  CHANGE_FAVORITE,
  SET_USER,
  REMOVE_FROM_CART,
  DISPLAY_FORM,
  SET_CART,
} from './stateTypes';

export const initialState = {
  cart: [],
  favorite: [],
  user: null,
  displayForm: '',
};
// dashboard
export const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: addToCart(state.cart, action.payload),
      };

    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorite: addToFavorite(state.favorite, action.payload),
      };
    // change a sigle product in cart
    case CHANGE_CART:
      return {
        ...state,
        cart: changeCustomCart(state.cart, action.payload),
      };

    // set a new cart
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: removeFromCart(state.cart, action.payload),
      };

    case CHANGE_FAVORITE:
      return {
        ...state,
        favorite: action.payload,
      };

    case DISPLAY_FORM:
      return {
        ...state,
        displayForm: action.payload,
      };

    default:
      return state;
  }
};

const addToCart = (cart, item) => {
  let newCart = cart;
  if (cart?.find((c) => c?.id === item?.id)) {
    newCart.find((c) => c.id === item.id).count =
      cart.find((c) => c.id === item.id).count + item.count;
  } else {
    item.count = 1;
    newCart = [...newCart, item];
  }
  localStorage.setItem('cart', JSON.stringify(newCart));
  return newCart;
};

const removeFromCart = (cart, item) => {
  let newCart = cart;
  if (cart.filter((c) => c?.id === item?.id).length > 1) {
    newCart.find((c) => c.id === item.id).count =
      cart.find((c) => c.id === item.id).count - 1;
  } else {
    newCart = newCart.filter((c) => c.id !== item?.id);
  }
  localStorage.setItem('cart', JSON.stringify(newCart));
  return newCart;
};

const changeCustomCart = (cart, item) => {
  let newCart = cart;
  const objIndex = newCart.findIndex((obj) => obj.id == item.id);
  //Update object's name property.
  newCart[objIndex] = item;
  //Log object to console again.
  localStorage.setItem('cart', JSON.stringify(newCart));
  return newCart;
};

const clearCart = () => {
  localStorage.setItem('cart', JSON.stringify([]));
  return [];
};

const changeCurrency = (currency) => {
  localStorage.setItem('currency', JSON.stringify(currency));

  return currency;
};

const addToFavorite = (favorite, item) => {
  const newFavorite = favorite.find((c) => c.id === item.id)
    ? favorite.filter((c) => c.id !== item.id)
    : [...favorite, item];
  localStorage.setItem('favorite', JSON.stringify(newFavorite));
  return newFavorite;
};
