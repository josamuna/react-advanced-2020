import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('Default text');
  const [isError, setIsError] = useState(true);
  // const firstValue = text || 'hello world'
  // const secondValue = text && 'hello world'

  return (
    <>
      <h1>{text || 'New Day'}</h1>
      <h1>Value: {text && 'Hello world'}</h1>
      {isError && <h1>Error...</h1>}
      {isError ? <h2>there is an error</h2> : <h2>no error...</h2>}
      <button
        type='button'
        className='btn'
        onClick={() => {
          setIsError(!isError);
          setText('Change value');
        }}
      >
        Toggle Error
      </button>
    </>
  );
};
export default ShortCircuit;
