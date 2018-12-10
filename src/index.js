import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from './App';
import './index.css';

const target = document.getElementById('root');

render(
        <Router>
            <div>
                <App />
            </div>
        </Router>,
    target
);
