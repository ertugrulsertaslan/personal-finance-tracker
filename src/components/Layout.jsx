import React from 'react';
import Menu from './Menu';

function Layout({ children }) {
  return (
    <div className='bg-customBgColor h-full'>
      <div className='container mx-auto'>
        <div className='w-full grid grid-cols-12 gap-4 h-screen p-2'>
          <div className='col-span-12 md:col-span-3  xl:col-span-2'>
            <Menu />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
