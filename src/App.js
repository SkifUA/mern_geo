import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import User from "./user/pages/User";
import NewPage from "./places/pages/NewPage";

const App = () => {
  return (
  <Router>
    <Switch>
      <Route path="/" exact>
        <User />
      </Route>
      <Route path="/places/new" exact>
        <NewPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  </Router>
  )
}

export default App;
