import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NewProduct from "./pages/NewProduct";
import EditProduct from "./pages/EditProduct";
import Register from "./pages/Register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/profile' component={Profile} />
        <Route path='/products/new' component={NewProduct} />
        <Route path='/products/edit' component={EditProduct} />
        <Route path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
