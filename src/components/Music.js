import React, { useState } from 'react';

const Music = () => {
  const [music, setMusic] = useState([
    { song: "Danny Nedelko", album: "Joy as an Act of Resistance", img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Idles_-_Danny_Nedelko.jpg/220px-Idles_-_Danny_Nedelko.jpg"},
    { song: "Danny Nedelko", album: "Joy as an Act of Resistance", img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Idles_-_Danny_Nedelko.jpg/220px-Idles_-_Danny_Nedelko.jpg"},
    { song: "Danny Nedelko", album: "Joy as an Act of Resistance", img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Idles_-_Danny_Nedelko.jpg/220px-Idles_-_Danny_Nedelko.jpg"}
  ])

  const renderMusic = () => {
    return music.map(m => <><h5>{m.song}</h5><p>{m.album}</p><img src={m.img} /></>)
  }

  return (
    <div>
      { renderMusic() }
    </div>
  );
}

export default Music;