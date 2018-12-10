import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import NotFound from './global/NotFound';
import Footer from './global/Footer';

const App = props => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
    </div>
);

export default App;
