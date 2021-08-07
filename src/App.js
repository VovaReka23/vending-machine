import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Home, Basket, Admin } from './pages'
import { Header, Footer, Sidebar } from './components'
function App() {
  return (
    <>
      <Header />

      <div className="container m-30t">
        <Switch>
          <Route exact path="/vending-machine">
            <Home />
          </Route>
          <Route exact path="/vending-machine/basket">
            <Basket />
          </Route>
          <Route exact path="/vending-machine/admin">
            <Admin />
          </Route>
        </Switch>
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}

export default App;
