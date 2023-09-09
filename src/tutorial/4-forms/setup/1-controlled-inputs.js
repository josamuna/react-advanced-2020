import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const submitData = (e) => {
    e.preventDefault();
    // console.log('Hello word');
    // console.log(`firstName is ${firstName} and email is ${email}`);

    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople((oldPeople) => {
        return [...oldPeople, person];
      });
      setFirstName('');
      setEmail('');
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email :</label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='button' onClick={submitData}>
            Add Person
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div key={id} className='item'>
              <h4>{firstName}</h4>
              <h4>{email}</h4>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
