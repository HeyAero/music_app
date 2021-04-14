import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Homepage, About } from './pages';
import { Header, Footer } from './layout';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Footer/>
    </>
  );
};

export default App;