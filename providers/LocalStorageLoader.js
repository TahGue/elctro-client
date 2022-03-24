import React, { useEffect } from 'react';
import { useStateValue } from './StateContext';
import { CHANGE_CART, CHANGE_FAVORITE } from './stateTypes';

function LocalStorageLoader({ children }) {
  const [{}, changeState] = useStateValue();

  useEffect(() => {
    const newCart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];

    changeState({
      type: CHANGE_CART,
      payload: newCart,
    });

    const newFavorite = localStorage.getItem('favorite')
      ? JSON.parse(localStorage.getItem('favorite'))
      : [];

    changeState({
      type: CHANGE_FAVORITE,
      payload: newFavorite,
    });
  }, []);

  return <>{children}</>;
}

export default LocalStorageLoader;
