import React from 'react';

const ErrorExample = () => {
  let title = 'My random title';

  const handleClick = () => {
    title = 'New value for title';
    console.log(title);
  };
  return (
    <div>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </div>
  );
};

export default ErrorExample;
