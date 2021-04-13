import React, { useState } from 'react';

const Welcome = () => {
  const [name, setName] = useState("stranger");
  const [nameInput, setNameInput] = useState('');

  const handleInput = (e) => {
    setNameInput(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setName(nameInput);
    setNameInput('');
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Let us know your name:</label>
        <input type="text" id="name" name="name" className="ml-3" placeholder="PLEASEEEE enter name..." value={nameInput} onChange={handleInput}/>
      </form>
      <h5 aria-label="welcome" id="welcome">Here are some of our songs, {name ? name : 'stranger'}:</h5>
    </>
  );
}

export default Welcome;