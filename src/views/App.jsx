import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Login from './Login';
import Demo from './Demo';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main className="container">
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/demo" component={Demo} />
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;