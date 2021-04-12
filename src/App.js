import React from 'react';
import Intro from './components/Intro';
import Music from './components/Music';
import Welcome from './components/Welcome';

function App() {
  return (
    <main className="container">
      <Intro />
      <Welcome />
      <Music />
    </main>
  );
}

export default App;