import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 22,
    message: "random message",
  });

  const [name, setName] = useState("peter");
  const [age, setAge] = useState(20);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    // setPerson({ ...person, message: "I am ok" });
    setMessage("I am ok");
  };
  return (
    <>
      {/* <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3> */}
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button type="button" className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
