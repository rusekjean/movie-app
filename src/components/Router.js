import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Templates/Home/HomeContainer";
import Info from "./Templates/Info/InfoContainer";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/info/:id" component={Info} />
      {/* <Route path="/recipe/:id" component={Recipe} /> */}
    </Switch>
  </BrowserRouter>
);

export default Router;



