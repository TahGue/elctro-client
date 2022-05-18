import { isFuture, isPast } from 'date-fns';
import jwtDecode from 'jwt-decode';
import React, { useEffect } from 'react';
import { useStateValue } from './StateContext';
import { CHANGE_CART, CHANGE_FAVORITE, SET_USER } from './stateTypes';

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

    const token = localStorage.getItem('token');
    const decoded = token ? jwtDecode(token) : undefined;

    if (token && decoded && isFuture(new Date(decoded.exp * 1000))) {
      changeState({
        type: SET_USER,
        payload: decoded,
      });
    } else {
      changeState({
        type: SET_USER,
        payload: null,
      });

      localStorage.removeItem('token');
    }
  }, []);

  return <>{children}</>;
}

export default LocalStorageLoader;
