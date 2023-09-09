import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [isShow, setisShow] = useState(false);

  return (
    <>
      <button type='btn' className='btn' onClick={() => setisShow(!isShow)}>
        show/hide
      </button>
      {isShow && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const handleSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  return (
    <>
      <div style={{ marginTop: '1rem' }}>
        <h1>window</h1>
        <h2>size : {size} px</h2>
      </div>
    </>
  );
};

export default ShowHide;
