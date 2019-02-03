import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginLayout } from "./layouts/LoginLayout";
import { RegisterLayout } from "./layouts/RegisterLayout";
import NotFound from './layouts/404NotFound';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={LoginLayout} />
      <Route path="/register" component={RegisterLayout} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
