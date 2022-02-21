import React from 'react';
import Header from './Header';

type Props = {
  children: React.ReactNode;
  title?: string;
};

const PublicLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default PublicLayout;
