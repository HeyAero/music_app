import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Lyrics = ({title, close}) => {
  const [singleLyric, setSingleLyric] = useState();

  useEffect(() => {
    let displayLyrics;
    const fetchLyrics = async() => {
      try {
        let { data } = await axios.get(`https://api.lyrics.ovh/v1/IDLES/${title}`);
        let lyricsArray = data.lyrics.split('\n').filter(line => line != "");

        let i = 0;
        displayLyrics = setInterval(() => {
          if (lyricsArray[i]) {
            let lyric = lyricsArray[i];
            setSingleLyric(lyric);
          } else {
            i = 0;
          }
          i++;
        }, 5000)
      } catch(err) {
        console.warn(err);
      }
    }
    fetchLyrics();
    return () => clearInterval(displayLyrics)
  }, [title]);

  return (
    <>
      <span onClick={close} style={{cursor: "pointer"}}>x</span>
      {
        singleLyric ? 
        <p>{singleLyric}</p>
        : <p>Loading...</p>
      } 
    </>
  );
}

export default Lyrics;