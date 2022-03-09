import React from 'react';

export const SideBar: React.FC = ({ children }) => {
  return (
    <aside className="flex flex-col pt-6 pb-6 w-20 h-screen bg-primary-500 fixed top-0 shadow-aside z-20">
      {children}
    </aside>
  );
};
