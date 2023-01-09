import React from "react";

const ErrorExample = () => {
  let title = "random title";

  const handleClick = () => {
    // We change the title value but we not re-render the component to trigger the value change
    title = "Hello people";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
