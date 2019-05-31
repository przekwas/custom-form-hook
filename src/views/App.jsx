import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';

const App = () => {
    return (
        <BrowserRouter>
            <main className="container">
                <Switch>
                    <Route exact path="/" component={Login} />
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;