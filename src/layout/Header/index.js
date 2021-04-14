import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="current">Home</NavLink>
      <NavLink to="/about" activeClassName="current">About</NavLink>
      <NavLink to="/tour" activeClassName="current">Tour Dates</NavLink>
    </nav>
  );
}

export default Header;