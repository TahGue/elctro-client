import React from 'react';
import { useStateValue } from '../../providers/StateContext';
import Empty from '../empty/Empty';

type IProps = {
  children: React.ReactNode;
};
function PrivateRoute({ children }: IProps) {
  const [{ user }] = useStateValue();

  if (!user || user === null) return <Empty />;

  return <>{children}</>;
}

export default PrivateRoute;
