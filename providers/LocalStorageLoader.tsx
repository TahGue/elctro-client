import { isFuture, isPast } from 'date-fns';
import jwtDecode from 'jwt-decode';
import React, { useEffect } from 'react';
import { useStateValue } from './StateContext';
import {
  CHANGE_CART,
  CHANGE_FAVORITE,
  SET_CART,
  SET_USER,
  SET_IS_COMPNAY,
} from './stateTypes';

type IProps = {
  children: React.ReactNode;
};

type JWTDecodeType = {
  exp: number;
  iat: number;
  sub: string;
  id: string;
  name: string;
  email: string;
};

function LocalStorageLoader({ children }: IProps) {
  const [{}, changeState] = useStateValue();

  useEffect(() => {
    const newCart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart') || '')
      : [];

    changeState({
      type: SET_CART,
      payload: newCart,
    });
    const isCompany =
      localStorage.getItem('isCompany') &&
      localStorage.getItem('isCompany') === 'true'
        ? true
        : false;

    changeState({
      type: SET_IS_COMPNAY,
      payload: isCompany,
    });
    const newFavorite = localStorage.getItem('favorite')
      ? JSON.parse(localStorage.getItem('favorite') || '')
      : [];

    changeState({
      type: CHANGE_FAVORITE,
      payload: newFavorite,
    });

    const token = localStorage.getItem('token');
    const decoded: JWTDecodeType | undefined = token
      ? jwtDecode(token)
      : undefined;

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
