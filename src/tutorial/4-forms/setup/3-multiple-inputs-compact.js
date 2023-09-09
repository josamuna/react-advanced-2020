import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [formInput, setFormInput] = useState({
    id: '',
    firstName: '',
    email: '',
    age: '',
  });
  const [people, setPeople] = useState([]);

  const submitData = (e) => {
    e.preventDefault();

    if (formInput.firstName && formInput.email && formInput.age) {
      const newPerson = { ...formInput, id: new Date().getTime().toString() };
      // setPeople((oldPeople) => {
      //   return [...oldPeople, newPerson];
      // });
      setPeople([...people, newPerson]);
      setFormInput({ firstName: '', email: '', age: '' });
    } else {
      console.log('Empty values');
    }
  };

  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name :</label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              value={formInput.firstName}
              onChange={(e) =>
                setFormInput({ ...formInput, firstName: e.target.value })
              }
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email :</label>
            <input
              type='email'
              name='email'
              id='email'
              value={formInput.email}
              onChange={(e) =>
                setFormInput({ ...formInput, email: e.target.value })
              }
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age :</label>
            <input
              type='text'
              name='age'
              id='age'
              value={formInput.age}
              onChange={(e) =>
                setFormInput({ ...formInput, age: e.target.value })
              }
            />
          </div>
          <button type='button' onClick={submitData}>
            Add Person
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div key={id} className='item'>
              <h4>{firstName}</h4>
              <h4>{email}</h4>
              <h4>{age}</h4>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
