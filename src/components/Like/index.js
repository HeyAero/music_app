import React, { useState } from 'react';

const Like = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  }
  
  return (
    <i role="switch" onClick={handleLike} style={{ color: liked ? 'gold' : 'white'}} className={liked ? "fa fa-thumbs-up fa-2x ml-auto pb-2" : "fa fa-thumbs-down fa-2x ml-auto pb-2"}></i>)
  ;
}

export default Like;