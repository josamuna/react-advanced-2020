import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const resetValue = () => {
    setValue(0);
  };

  const increaseValue = () => {
    setValue(value + 1);
  };

  const decreaseValue = () => {
    setValue(value - 1);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevStateValue) => {
        return prevStateValue + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: '1rem' }}>
        <h2>counter</h2>
        <h1>{value}</h1>
        <button type='button' className='btn' onClick={increaseValue}>
          increase
        </button>
        <button type='button' className='btn' onClick={resetValue}>
          reset
        </button>
        <button type='button' className='btn' onClick={decreaseValue}>
          decrease
        </button>
      </section>
      <section style={{ margin: '1rem' }}>
        <h2>complex counter</h2>
        <h1>{value}</h1>
        <button type='button' className='btn' onClick={complexIncrease}>
          increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
