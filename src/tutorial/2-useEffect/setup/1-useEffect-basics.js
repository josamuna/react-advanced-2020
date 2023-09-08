import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Executed (Re-render) when condition match
    if (value > 1 && value < 6) {
      document.title = `Messages(${value})`;
    }
  });

  useEffect(() => {
    // Run only once only (Initial render), empty array should be present
    console.log('Happy to use Hooks');
  }, []);

  useEffect(() => {
    // Executed (Re-render) when condition match and when value change
    if (value > 10) {
      console.log('Greater tha 10');
    }
  }, [value]);

  const handleClick = () => {
    setValue((oldValue) => {
      return oldValue + 1;
    });
  };
  return (
    <>
      <h1>{value}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        Cleck me
      </button>
    </>
  );
};

export default UseEffectBasics;
