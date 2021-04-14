import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Homepage } from './pages';
import { Header, Footer } from './layout';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
      <Footer/>
    </>
  );
};

export default App;