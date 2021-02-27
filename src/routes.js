import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import MovieCart  from "./movie.cart/movie.cart";
import SignleMovie from "./single.movie/single.movie";
import MovieContext from './context';

export function Routes(props) {
  return (
    <main>
      <Switch>
        <Route exact path="/moviecart" component={MovieCart} />
        <Route path={`/moviecart/:moviename/details`} component={SignleMovie} />
      </Switch>
    </main>
  );
}

export default Routes;
