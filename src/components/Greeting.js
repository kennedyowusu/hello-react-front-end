import { useSelector } from 'react-redux';
import React from 'react';

const Greeting = () => {
  const greeting = useSelector((state) => state.home.data);

  if (greeting) {
    return (
      <div>
        <h1>{greeting.message}</h1>
      </div>
    );
  }
  return '';
};

export default Greeting;
