// Dependencias
import React from 'react';
import { Route, Switch } from "react-router-dom";

// Componentes
import App from "./App";
import MovieList from "./components/MovieList";
import DetailMovie from "./components/DetailMovie";

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" name="movieList" component={MovieList} />
            <Route exact path="/detail/:id" name="detail" component={DetailMovie} />
        </Switch>
    </App>

export default AppRoutes;