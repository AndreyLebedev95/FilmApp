import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {MainLayout} from './components';
import {MainRouter} from './routes';
import './styles/main.scss';

const BASE_NAME = __PUBLIC_PATH__.slice(0, -1);

export const App = () => (
    <BrowserRouter basename={BASE_NAME}>
        <MainLayout>
            <MainRouter />
        </MainLayout>
    </BrowserRouter>
);