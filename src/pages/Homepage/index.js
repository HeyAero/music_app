import React, { useState } from 'react';
import { Intro, Welcome, Music } from '../../components';

const Homepage = () => {

  const [music, setMusic] = useState([
    { id: 1, song: "Danny Nedelko", album: "Joy as an Act of Resistance", img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Idles_-_Danny_Nedelko.jpg/220px-Idles_-_Danny_Nedelko.jpg", link: "https://www.idlesband.com/uk/"},
    { id: 2, song: "MR.MOTIVATOR", album: "Ultra Mono", img: "https://f4.bcbits.com/img/a1320226088_10.jpg", link: "https://www.idlesband.com/uk/"},
    { id: 3, song: "GROUNDS", album: "Ultra Mono", img: "https://f4.bcbits.com/img/a3789051601_10.jpg", link: "https://www.idlesband.com/uk/"}
  ])

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

  const renderMusic = () => {
    return music.map(m =>
      <Music music={m} key={m.id}/>
    );
  }

  return (
    <main aria-label="main" className="container">
      <Intro />
      <Welcome name={name} nameInput={nameInput} handleInput={handleInput} handleFormSubmit={handleFormSubmit} />
      <div className="row justify-content-center">
        { renderMusic() }
      </div>
    </main>
  )
}

export default Homepage;