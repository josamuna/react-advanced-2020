import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    // return () => {
    //   console.log('remove');
    //   window.removeEventListener('resize', checkSize);
    // };
  }, []);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  return (
    <>
      <h1>window size</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
