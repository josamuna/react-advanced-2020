import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const handleRemovePerson = (id) => {
    // const newPeople = people.filter((person) => person.id !== personId);
    // setPeople(newPeople);
    // Better way with Functional approch
    setPeople((oldPeople) => {
      const newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };
  return (
    <>
      {people.map((person) => {
        let { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => handleRemovePerson(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear items
      </button>
    </>
  );
};

export default UseStateArray;
