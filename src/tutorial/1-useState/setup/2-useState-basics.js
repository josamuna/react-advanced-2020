import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("Hello!!"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const randomText = "Random title";
  const [text, setText] = useState(randomText);
  const handleClick = () => {
    // Same result as below and more compact
    text === randomText ? setText("Hello World") : setText(randomText);

    // if (text === randomText) {
    //   setText("Hello World");
    // } else {
    //   setText(randomText);
    // }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
