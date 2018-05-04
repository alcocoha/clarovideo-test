// Dependencias
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from "./routes";

// Assets
import './index.css';

render(
    <Router>
        <AppRoutes />
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
