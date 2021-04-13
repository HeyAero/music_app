import React, { useState } from 'react';
import { Button, Like } from '../';

const Music = ({music}) => {
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