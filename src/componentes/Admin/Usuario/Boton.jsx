import React from 'react';

const Button = ({ color, children }) => {
  return (
    <button className={`w-full ${color} text-white px-4 py-2 rounded-lg shadow`}>
      {children}
    </button>
  );
};

export default Button;