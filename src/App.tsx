import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {MainLayout} from './components';
import {MainRouter} from './routes';
import './styles/main.scss';

export const App = () => (
    <BrowserRouter>
        <MainLayout>
            <MainRouter />
        </MainLayout>
    </BrowserRouter>
);