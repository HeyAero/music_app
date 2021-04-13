import React, { useState } from 'react';
import { Button, Like } from '../';

const Music = () => {
  const [music, setMusic] = useState([
    { song: "Danny Nedelko", album: "Joy as an Act of Resistance", img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Idles_-_Danny_Nedelko.jpg/220px-Idles_-_Danny_Nedelko.jpg", link: "https://www.idlesband.com/uk/"},
    { song: "MR.MOTIVATOR", album: "Ultra Mono", img: "https://f4.bcbits.com/img/a1320226088_10.jpg", link: "https://www.idlesband.com/uk/"},
    { song: "GROUNDS", album: "Ultra Mono", img: "https://f4.bcbits.com/img/a3789051601_10.jpg", link: "https://www.idlesband.com/uk/"}
  ])

  const renderMusic = () => {
    return music.map(m =>
      <div className="card col-sm">
        <Like />
        <img src={m.img} className="card-img-top" alt="Album Cover"/>
        <div className="card-body">
          <h5 className="card-title">{m.song}</h5>
          <p className="card-text">{m.album}</p>
          <Button name={m.song} href={m.link}/>
        </div>
      </div>
    );
  }

  return (
    <div className="row justify-content-center">
      { renderMusic() }
    </div>
  );
}

export default Music;