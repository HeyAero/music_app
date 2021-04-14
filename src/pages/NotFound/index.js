import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main aria-label="main" className="container">
      <h1>404 - Not Found!</h1>
      <Link to="/">
        Go Home
      </Link>
    </main>
  );
}

export default NotFound;