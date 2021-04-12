import React from 'react';

const Button = (props) => {
  return (
    <div className="text-center">
      <a href={props.href}>{props.name}</a>
    </div>
  );
}

export default Button;