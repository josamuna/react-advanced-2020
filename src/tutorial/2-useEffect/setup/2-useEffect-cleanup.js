import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    // We can remove this remove Event and run once useEffect by adding a ampty array as second par
    // return () => {
    //   console.log("cleanup");
    //   window.removeEventListener("resize", checkSize);
    // };
  }, []);
  console.log("render");
  return (
    <>
      <h1>Window Current Size</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
