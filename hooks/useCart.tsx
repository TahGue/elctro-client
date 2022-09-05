import jwtDecode from 'jwt-decode';
import {
  useQuery,
  useMutation,
  QueryClient,
  useQueryClient,
} from '@tanstack/react-query';
import axiosInstance, { isServer } from '../api/config';
import { BASE_URL } from '../config/urls';

const onRemoveFromCart = async (productId) => {
  const cartId = !isServer && localStorage.getItem('cartId');
  const result = axiosInstance
    .post(`/cart/product/remove`, {
      cartId,
      productId: productId,
    })
    .then((res) => res.data);

  return result;
};

const onChangeCart = async ({ productId, quantity }) => {
  const cartId = !isServer && localStorage.getItem('cartId');
  const result = await axiosInstance
    .post(`/cart/product/change`, {
      cartId,
      productId: productId,
      quantity,
    })
    .then((res) => res.data);

  return result;
};
export const useCart = () => {
  const cartId =
    !isServer && localStorage.getItem('cartId')
      ? localStorage.getItem('cartId')
      : undefined;
  const token = !isServer && localStorage.getItem('token');
  const user = token && token !== null ? jwtDecode(token) : undefined;
  const { data, isLoading, refetch } = useQuery(
    ['carts'],
    () =>
      axiosInstance
        .post(`/cart/new`, {
          cartId: cartId,
          userId: user && user.id,
        })
        .then((res) => {
          localStorage.setItem('cartId', res.data.id);
          return res.data;
        }),
    {
      enabled: isServer ? false : true,
      onError: () => {
        localStorage.removeItem('cartId');
        localStorage.removeItem('token');
      },
    }
  );

  return { data, isLoading, refetch };
};

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();
  const removeMutation = useMutation(onRemoveFromCart, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['carts'], { refetchInactive: true });
    },
  });

  return removeMutation;
};

export const useChangeCart = () => {
  const queryClient = useQueryClient();
  const changeMutation = useMutation(onChangeCart, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['carts']);
    },
  });

  return changeMutation;
};

const checkCart = async (cartId) => {
  const result = await axiosInstance
    .get(`/order/cart/check`, {
      cartId,
    })
    .then((res) => res.data);
  return result;
};
export const useCheckCart = (cartId) => {
  const { data, isLoading } = useQuery(['cartCheck'], () => checkCart(cartId), {
    enabled: !isServer ? true : false,
  });

  return { data, isLoading };
};
