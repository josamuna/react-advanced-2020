import React, { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('josam');
  const [age, setAge] = useState(21);
  const [message, setMessage] = useState('Hello guys');

  const changeInfo = () => {
    setName('yan');
    setAge(30);
    setMessage('I am changing the current message');
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button type='button' className='btn' onClick={changeInfo}>
        ChangeInfo
      </button>
    </>
  );
};

export default UseStateObject;
