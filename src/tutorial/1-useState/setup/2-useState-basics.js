import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle] = useState('random Title');

  const handleClick = () => {
    // if (title === 'random title') {
    //   setTitle('hello world');
    // } else {
    //   setTitle('random title');
    // }

    // More consice
    title === 'random title'
      ? setTitle('hello world')
      : setTitle('random title');
  };

  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default UseStateBasics;
