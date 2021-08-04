import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Home, Basket } from './pages'
import { Header, Footer } from './components'
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/basket">
          <Basket />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
