import React from 'react';
import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button
              type='button'
              className='btn'
              onClick={() => removeItem(id)}
            >
              remove
            </button>
          </div>
        );
      })}
      <button type='button' className='btn' onClick={() => setPeople([])}>
        Clear items
      </button>
    </>
  );
};

export default UseStateArray;
