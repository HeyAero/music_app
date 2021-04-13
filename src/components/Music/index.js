import React, { useState } from 'react';
import { Button, Like, Lyrics } from '../';

const Music = ({music}) => {

  const [showLyrics, setShowLyrics] = useState(false);

  const toggleLyrics = () => setShowLyrics(prevState => !prevState);

  return (
    <div className="card col-sm">
      <Like />
      <img src={music.img} className="card-img-top" alt="Album Cover"/>
      <div className="card-body">
        <h5 className="card-title">{music.song}</h5>
        <p className="card-text">{music.album}</p>
        <Button name={music.song} href={music.link}/>
        {
          showLyrics ? <Lyrics title={music.song} close={toggleLyrics} />
          : <div className="text-center mt-3"><a href="#" onClick={toggleLyrics}>Show me the lyrics!</a></div>
        }
      </div>
    </div>
  );
}

export default Music;