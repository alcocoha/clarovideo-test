// Dependencias
import React from 'react';
import { Route, Switch } from "react-router-dom";

// Componentes
import App from "./App";
// import DetailMovie from "./components/detailMovie/DetailMovie";
import MovieList from './components/MovieList';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" name="movieList" component={MovieList} />
            {/* <Route exact path="/detail/:id" name="detail" component={DetailMovie} /> */}
        </Switch>
    </App>

export default AppRoutes;