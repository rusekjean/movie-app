import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Templates/Home/HomeContainer";
import Info from "./Templates/Info/InfoContainer";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/info/:id" component={Info} />
      <Route path='/storybook' component={() => { 
        window.location = 'http://localhost:9009'; 
        return null;
      }}/>
    </Switch>
  </BrowserRouter>
);

export default Router;



