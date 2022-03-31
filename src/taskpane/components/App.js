import React, { useState } from "react";
import Login from "./Login";
import { MemoryRouter, Route, Switch } from "react-router-dom";
import SuperAdmin from "./Pages/SuperAdmin";
import User from "./Pages/User";
import Admin from "./Pages/Admin";
import Movies from "./Pages/Movies";
const App = () => {
  return (
    <MemoryRouter>
      <Switch>
      <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/SuperAdmin">
          <SuperAdmin />
        </Route>
        <Route exact path="/User">
          <User />
        </Route>
        <Route exact path="/Admin">
          <Admin />
        </Route>
        <Route exact path="/Movies">
          <Movies />
        </Route>
      </Switch>
    </MemoryRouter>
    
  
  );
};
export default App;
