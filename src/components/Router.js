import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Templates/Home/HomeContainer";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      {/* <Route path="/recipe/:id" component={Recipe} /> */}
    </Switch>
  </BrowserRouter>
);

export default Router;



