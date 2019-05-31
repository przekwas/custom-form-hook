import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mx-auto">
                    <NavLink exact to="/" className="nav-item nav-link" activeClassName="nav-item nav-link active border-bottom border-primary">Custom Hook</NavLink>
                    <NavLink exact to="/demo" className="nav-item nav-link" activeClassName="nav-item nav-link active border-bottom border-primary">Standard Hooks</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;