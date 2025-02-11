import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
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
      setPeople([...people, newPerson]);
      setFormInput({ firstName: '', email: '', age: '' });
    } else {
      console.log('Empty values');
    }
  };

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormInput({ ...formInput, [name]: value });
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
              onChange={handleFormChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email :</label>
            <input
              type='email'
              name='email'
              id='email'
              value={formInput.email}
              onChange={handleFormChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age :</label>
            <input
              type='text'
              name='age'
              id='age'
              value={formInput.age}
              onChange={handleFormChange}
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
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
