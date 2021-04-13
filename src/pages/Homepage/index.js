import React from 'react';
import { Intro, Welcome, Music } from '../../components';

const Homepage = () => {
  return (
    <main className="container">
      <Intro />
      <Welcome />
      <Music />
    </main>
  )
}

export default Homepage;