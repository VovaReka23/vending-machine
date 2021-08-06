import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Home, Basket } from './pages'
import { Header, Footer, Sidebar } from './components'
function App() {
  return (
    <>
      <Header />

      <div className="container m-30t">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/basket">
            <Basket />
          </Route>
        </Switch>
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}

export default App;
