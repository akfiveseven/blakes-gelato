import React from 'react';

/*
interface CenteredContainerProps {
  children: React.ReactNode;
  className?: string;
}
*/

const CenteredContainer = ({
  children,
  className = '',
}) => {
  return (
    <main 
      className={`
        w-full 
        max-w-7xl 
        mx-auto 
        px-4 
        sm:px-6 
        lg:px-8
        flex 
        flex-col 
        justify-center 
        items-center
        ${className}
      `}
    >
      {children}
    </main>
  );
}; 

export { CenteredContainer }
