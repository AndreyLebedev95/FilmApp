import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {
    MAIN_PATH,
    SEARCH_PATH,
    FILM_PATH
} from './constants';
import {
    TopFilmsLayout,
    FilmLayout,
    SearchFilmsLayout
} from '../components';

export const MainRouter = () => (
    <Switch>
        <Route path={`${SEARCH_PATH}:query`}>
            <SearchFilmsLayout />
        </Route>
        <Route path={`${FILM_PATH}:filmId`}>
            <FilmLayout/>
        </Route>
        <Route path={MAIN_PATH}>
            <TopFilmsLayout />
        </Route>
    </Switch>
);